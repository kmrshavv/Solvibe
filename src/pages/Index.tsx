
import { Hotel, Shirt, Heart, FileText, Shield, Wheat, Smartphone, Car, Dumbbell } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';

const Index = () => {
  const categories = [
    {
      title: 'Hotels',
      description: 'Luxury stays and budget-friendly accommodations',
      icon: Hotel,
      link: '/hotels',
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Clothing',
      description: 'Latest fashion trends and comfortable wear',
      icon: Shirt,
      link: '/clothing',
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      title: 'Pets & Pet Food',
      description: 'Everything your furry friends need',
      icon: Heart,
      link: '/pets',
      gradient: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      title: 'Printed Items',
      description: 'Custom printing and design services',
      icon: FileText,
      link: '/printed-items',
      gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-600'
    },
    {
      title: 'Insurance',
      description: 'Comprehensive insurance coverage plans',
      icon: Shield,
      link: '/medical-insurance',
      gradient: 'bg-gradient-to-br from-red-500 to-red-600'
    },
    {
      title: 'Agriculture',
      description: 'Seeds, fertilizers and farming equipment',
      icon: Wheat,
      link: '/agriculture',
      gradient: 'bg-gradient-to-br from-green-600 to-green-700'
    },
    {
      title: 'Electronics',
      description: 'Latest gadgets and electronic devices',
      icon: Smartphone,
      link: '/electronics',
      gradient: 'bg-gradient-to-br from-cyan-500 to-cyan-600'
    },
    {
      title: 'Refurbished Vehicles',
      description: 'Quality pre-owned cars and bikes',
      icon: Car,
      link: '/vehicles',
      gradient: 'bg-gradient-to-br from-gray-600 to-gray-700'
    },
    {
      title: 'Fitness',
      description: 'Workout equipment and fitness gear',
      icon: Dumbbell,
      link: '/fitness',
      gradient: 'bg-gradient-to-br from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-12">
            <img 
              src="/lovable-uploads/0d9691e4-7649-45e3-bc4e-35ada0217477.png" 
              alt="Solvibe Logo" 
              className="mx-auto h-24 w-auto mb-8 drop-shadow-lg"
            />
            <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Welcome to <span className="text-orange-600">Solvibe</span>
            </h1>
            <p className="text-2xl text-orange-600 mb-6 font-semibold">
              Catch the Vibe. Shine the Sale.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Your one-stop marketplace for everything you need - from luxury hotels to everyday essentials, 
              all with secure payment options and the best prices in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Shopping
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Explore Our Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing products across multiple categories, all in one place
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Solvibe?</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            We provide the best shopping experience with premium quality and service
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">💳</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Secure Payments</h3>
              <p className="text-gray-600 leading-relaxed">Multiple payment options including UPI, Cards, Net Banking, and COD with 100% secure transactions</p>
            </div>
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">🚚</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Quick and reliable delivery across India with real-time tracking and updates</p>
            </div>
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Quality Assured</h3>
              <p className="text-gray-600 leading-relaxed">Premium products with guaranteed quality and 30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5K+</div>
              <div className="text-orange-100">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-orange-100">Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-orange-100">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
