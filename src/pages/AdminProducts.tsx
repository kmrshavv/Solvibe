
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { products } from '@/data/products';
import { Product } from '@/components/ProductCard';
import { ArrowLeft, Plus, Edit, Trash2, Search } from 'lucide-react';
import { toast } from 'sonner';

const AdminProducts = () => {
  const { category } = useParams<{ category: string }>();
  const { admin } = useAdmin();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!admin) {
      navigate('/admin/login');
      return;
    }

    // Check if admin has access to this category
    if (admin.role !== 'super_admin' && admin.role !== category) {
      navigate('/admin/dashboard');
      toast.error('You do not have access to this category');
      return;
    }

    // Filter products by category
    const filtered = products.filter(product => product.category === category);
    setCategoryProducts(filtered);
  }, [admin, category, navigate]);

  const filteredProducts = categoryProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteProduct = (productId: string) => {
    setCategoryProducts(prev => prev.filter(p => p.id !== productId));
    toast.success('Product deleted successfully');
  };

  if (!admin) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/admin/dashboard')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 capitalize">
                  {category} Products
                </h1>
                <p className="text-sm text-gray-600">
                  Manage your {category} product inventory
                </p>
              </div>
            </div>
            <Button 
              onClick={() => navigate(`/admin/products/${category}/add`)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <CardTitle className="text-lg line-clamp-2">
                      {product.name}
                    </CardTitle>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-2xl font-bold text-orange-600">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <Badge variant="secondary" className="capitalize">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => navigate(`/admin/products/${category}/edit/${product.id}`)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-red-600 hover:text-red-700"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found</p>
            <Button 
              className="mt-4"
              onClick={() => navigate(`/admin/products/${category}/add`)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Product
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;
