
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">Product not found</p>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast.success(`${product.name} added to cart!`);
  };

  const getCategoryRoute = (category: string) => {
    switch (category) {
      case 'hotels': return '/hotels';
      case 'clothing': return '/clothing';
      case 'pets': return '/pets';
      case 'printed': return '/printed-items';
      case 'medical': return '/medical-insurance';
      default: return '/';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link 
          to={getCategoryRoute(product.category)}
          className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to {product.category}
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <p className="text-4xl font-bold text-orange-600">₹{product.price.toLocaleString()}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={addToCart}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6"
                >
                  Add to Cart - ₹{product.price.toLocaleString()}
                </Button>
                
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1">
                    Save for Later
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Share Product
                  </Button>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-800 mb-3">Payment Options</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <span>💳 Credit/Debit Cards</span>
                  <span>📱 UPI Payment</span>
                  <span>🏦 Net Banking</span>
                  <span>💵 Cash on Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
