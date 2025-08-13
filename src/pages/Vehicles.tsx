import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Vehicles = () => {
  const vehicleProducts = products.filter(product => product.category === 'vehicles');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Refurbished Vehicles</h1>
          <p className="text-lg text-gray-600">Quality pre-owned cars and bikes with warranty and certification</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vehicles;