
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

const Pets = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'pets' | 'food'>('all');
  const petProducts = products.filter(product => product.category === 'pets');
  
  const petsForSale = petProducts.filter(product => 
    product.name.includes('Puppy') || product.name.includes('Cat') || product.name.includes('Dog')
  );
  
  const petFoodAndAccessories = petProducts.filter(product => 
    !product.name.includes('Puppy') && !product.name.includes('Cat') && !product.name.includes('Dog')
  );

  const getFilteredProducts = () => {
    switch (activeTab) {
      case 'pets':
        return petsForSale;
      case 'food':
        return petFoodAndAccessories;
      default:
        return petProducts;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pets & Pet Care</h1>
          <p className="text-lg text-gray-600">Find your perfect companion and everything they need</p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <Button
              variant={activeTab === 'all' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('all')}
              className={activeTab === 'all' ? 'bg-orange-500 hover:bg-orange-600' : ''}
            >
              All Products
            </Button>
            <Button
              variant={activeTab === 'pets' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('pets')}
              className={activeTab === 'pets' ? 'bg-orange-500 hover:bg-orange-600' : ''}
            >
              Pets for Sale
            </Button>
            <Button
              variant={activeTab === 'food' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('food')}
              className={activeTab === 'food' ? 'bg-orange-500 hover:bg-orange-600' : ''}
            >
              Food & Accessories
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredProducts().map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pets;
