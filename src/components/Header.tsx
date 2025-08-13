import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, User, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAdmin } from '@/contexts/AdminContext';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

// Mock data for categories and products (replace with actual API call in production)
const searchData = {
  categories: [
    'Hotels',
    'Clothing',
    'Pets',
    'Electronics',
    'Fitness',
    'Insurance'
  ],
  products: [
    { name: 'Luxury Hotel Suite', category: 'Hotels' },
    { name: 'Beach Resort Stay', category: 'Hotels' },
    { name: 'Designer Jacket', category: 'Clothing' },
    { name: 'Casual Sneakers', category: 'Clothing' },
    { name: 'Dog Bed', category: 'Pets' },
    { name: 'Cat Toy', category: 'Pets' },
    { name: 'Smartphone', category: 'Electronics' },
    { name: 'Wireless Headphones', category: 'Electronics' },
    { name: 'Treadmill', category: 'Fitness' },
    { name: 'Yoga Mat', category: 'Fitness' },
    { name: 'Health Insurance Plan', category: 'Insurance' },
    { name: 'Travel Insurance', category: 'Insurance' }
  ]
};

const Header = () => {
  const { state } = useCart();
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const [showSignup, setShowSignup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { login, isLoading } = useAdmin();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    console.log('Google Login triggered');
    // Replace with actual Google Auth API call
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const userId = (e.target as any).userId.value;
    const password = (e.target as any).password.value;
    const success = await login(userId, password);
    if (success) {
      setIsAuthenticated(true);
      toast.success('Login successful!');
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const userId = (e.target as any).userId.value;
    const password = (e.target as any).password.value;
    const confirmPassword = (e.target as any).confirmPassword.value;
    const mobileNumber = (e.target as any).mobile.value;

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    console.log('Signup attempt:', { userId, password, mobileNumber });
    if (userId && password && mobileNumber) {
      setIsAuthenticated(true);
      setShowSignup(false);
      navigate('/');
    } else {
      toast.error('Please fill all fields');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Perform search across categories and products
      const query = searchQuery.trim().toLowerCase();
      const results = {
        categories: searchData.categories.filter(category =>
          category.toLowerCase().includes(query)
        ),
        products: searchData.products.filter(product =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        )
      };

      console.log('Search results:', results);
      // Navigate to search results page with query
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`, { state: { searchResults: results } });
      setSearchQuery('');
    } else {
      toast.error('Please enter a search query');
    }
  };

  const navItems = [
    { to: '/hotels', label: 'Hotels' },
    { to: '/clothing', label: 'Clothing' },
    { to: '/pets', label: 'Pets' },
    { to: '/electronics', label: 'Electronics' },
    { to: '/fitness', label: 'Fitness' },
    { to: '/medical-insurance', label: 'Insurance' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-orange-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/0d9691e4-7649-45e3-bc4e-35ada0217477.png" 
                alt="Solvibe Logo" 
                className="h-10 w-auto group-hover:scale-110 transition-transform duration-300 sm:h-12"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors sm:text-2xl">
                Solvibe
              </h1>
              <p className="text-orange-500 text-xs font-medium hidden sm:block">
                Catch the Vibe. Shine the Sale.
              </p>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium relative group text-sm"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <form onSubmit={handleSearch} className="hidden sm:flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search categories & products..."
                className="border border-gray-300 rounded-l-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white text-gray-700 w-32 sm:w-40 md:w-48"
              />
              <Button
                type="submit"
                variant="outline"
                className="border border-gray-300 rounded-r-md border-l-0 p-1.5 bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>

            <Button
              variant="outline"
              size="icon"
              className="sm:hidden p-1 border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
              onClick={() => navigate('/search')}
            >
              <Search className="h-5 w-5" />
            </Button>

            <Link to="/cart">
              <Button 
                variant="outline" 
                className="relative bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 hover:border-orange-600 transition-all duration-300 p-1 sm:p-2"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full text-xs w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold animate-pulse">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 p-1 sm:p-2"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] sm:max-w-[425px]">
                <div className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Welcome</h2>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">To access account and manage</p>
                  {!isAuthenticated ? (
                    <>
                      <Button
                        onClick={handleGoogleLogin}
                        className="w-full mb-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center space-x-2 text-sm sm:text-base"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.78h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.78c-.98.66-2.23.94-3.71.94-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span>Continue with Google</span>
                      </Button>
                      {!showSignup ? (
                        <form onSubmit={handleLogin} className="space-y-3 sm:space-y-4">
                          <div>
                            <label htmlFor="role-select" className="block text-sm font-medium text-gray-700">Role</label>
                            <select
                              id="role-select"
                              value={role}
                              onChange={(e) => setRole(e.target.value as 'user' | 'admin')}
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm"
                            >
                              <option value="user">User</option>
                              <option value="admin">Admin</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">User ID / Admin ID</label>
                            <input
                              type="text"
                              name="userId"
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm"
                              placeholder="Enter User ID or Admin ID"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                              type="password"
                              name="password"
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm"
                              placeholder="Enter password"
                              required
                            />
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-red-500 text-white hover:bg-red-600 text-sm" 
                            disabled={isLoading}
                          >
                            {isLoading ? 'Signing in...' : 'LOGIN'}
                          </Button>
                          <p className="text-center text-sm text-gray-600 mt-3 sm:mt-4">
                            New user? <button onClick={() => setShowSignup(true)} className="text-red-500 hover:underline">Sign up</button>
                          </p>
                        </form>
                      ) : (
                        <form onSubmit={handleSignup} className="space-y-3 sm:space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">User ID</label>
                            <input
                              type="text"
                              name="userId"
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm"
                              placeholder="Enter User ID"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                              type="password"
                              name="password"
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm"
                              placeholder="Enter password"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                              type="password"
                              name="confirmPassword"
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm"
                              placeholder="Confirm password"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                            <input
                              type="tel"
                              name="mobile"
                              className="mt retir-1 block w-full p-2 border border-gray-300 rounded-md text-sm"
                              placeholder="Enter mobile number"
                              required
                            />
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-red-500 text-white hover:bg-red-600 text-sm"
                          >
                            SIGN UP
                          </Button>
                          <p className="text-center text-sm text-gray-600 mt-3 sm:mt-4">
                            Already have an account? <button onClick={() => setShowSignup(false)} className="text-red-500 hover:underline">Login</button>
                          </p>
                        </form>
                      )}
                    </>
                  ) : (
                    <div className="text-center">
                      <p className="text-green-600 font-semibold text-sm sm:text-base">Welcome, User!</p>
                      {role === 'admin' ? (
                        <Button 
                          variant="outline" 
                          className="mt-4 text-sm sm:text-base" 
                          onClick={() => navigate('/admin/dashboard')}
                        >
                          Admin Dashboard
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          className="mt-4 text-sm sm:text-base"
                        >
                          Profile
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>

            <Button 
              className="lg:hidden p-1 sm:p-2" 
              variant="outline" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link 
                  key={item.to}
                  to={item.to}
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
