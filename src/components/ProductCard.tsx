
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { ShoppingCart, Eye } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useCart();

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-white overflow-hidden">
      <CardContent className="p-0">
        <Link to={`/product/${product.id}`} className="block">
          <div className="relative overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                <Eye className="h-5 w-5 text-gray-700" />
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center justify-between mb-4">
              <p className="text-3xl font-bold text-orange-600">₹{product.price.toLocaleString()}</p>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
          </div>
        </Link>
      </CardContent>
      <CardFooter className="pt-0 px-6 pb-6">
        <Button 
          onClick={addToCart}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
