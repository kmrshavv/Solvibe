
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Heart, Users, Baby } from 'lucide-react';

const MedicalInsurance = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const insuranceProducts = products.filter(product => product.category === 'medical');
  
  const filteredProducts = selectedCategory === 'all' 
    ? insuranceProducts 
    : insuranceProducts.filter(product => product.subcategory === selectedCategory);

  const features = [
    {
      icon: Shield,
      title: 'Comprehensive Coverage',
      description: 'Protection against medical emergencies and hospitalization costs'
    },
    {
      icon: Heart,
      title: 'Critical Illness Support',
      description: 'Specialized coverage for major health conditions'
    },
    {
      icon: Users,
      title: 'Family Plans Available',
      description: 'Protect your entire family with our comprehensive plans'
    },
    {
      icon: Baby,
      title: 'Maternity Benefits',
      description: 'Complete coverage for pregnancy and newborn care'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Health Insurance Plans</h1>
          <p className="text-lg text-gray-600">Comprehensive health coverage for you and your family</p>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Insurance Plans */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="all">All Plans</TabsTrigger>
            <TabsTrigger value="health">Health</TabsTrigger>
            <TabsTrigger value="vehicle">Vehicle</TabsTrigger>
          </TabsList>
          
          <TabsContent value={selectedCategory}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Why Choose Our Health Insurance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Key Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Cashless treatment at 8000+ hospitals</li>
                <li>✅ No waiting period for accidents</li>
                <li>✅ Free health check-ups</li>
                <li>✅ 24/7 customer support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Coverage Includes</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Hospitalization expenses</li>
                <li>✅ Pre & post hospitalization</li>
                <li>✅ Day care procedures</li>
                <li>✅ Ambulance charges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MedicalInsurance;
