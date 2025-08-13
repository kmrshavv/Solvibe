
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, X, Image } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  uploadedImage?: string;
  onRemoveImage?: () => void;
}

const ImageUpload = ({ onImageUpload, uploadedImage, onRemoveImage }: ImageUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        onImageUpload(file);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        onImageUpload(file);
      }
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        {uploadedImage ? (
          <div className="relative">
            <img 
              src={uploadedImage} 
              alt="Uploaded design" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={onRemoveImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
              title="Upload your design image"
              placeholder="Choose an image file"
            />
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <Image className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Upload Your Design
                </h3>
                <p className="text-gray-500 mb-4">
                  Drag and drop your image here, or click to browse
                </p>
                <Button onClick={onButtonClick} className="bg-orange-500 hover:bg-orange-600">
                  <Upload className="h-4 w-4 mr-2" />
                  Choose File
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                Supports: JPG, PNG, GIF (Max 10MB)
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageUpload;
