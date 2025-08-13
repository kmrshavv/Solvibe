import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Agriculture = () => {
  const agricultureProducts = products.filter(product => product.category === 'agriculture');

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Agriculture & Farming</h1>
            <p className="text-lg text-gray-600">Quality seeds, fertilizers, and farming equipment for better harvest</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agricultureProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Agriculture;