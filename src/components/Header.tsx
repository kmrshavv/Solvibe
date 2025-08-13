import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAdmin } from '@/contexts/AdminContext';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

const Header = () => {
  const { state } = useCart();
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const [showSignup, setShowSignup] = useState(false);
  const { login, isLoading } = useAdmin();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Placeholder for Google OAuth login
    console.log('Google Login triggered');
    // Replace with actual Google Auth API call
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const userId = (e.target as any).userId.value;
    const password = (e.target as any).password.value;
    const success = await login(userId, password); // Pass only 2 arguments
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

    // Simulate signup
    console.log('Signup attempt:', { userId, password, mobileNumber });
    if (userId && password && mobileNumber) {
      setIsAuthenticated(true);
      setShowSignup(false);
      navigate('/');
    } else {
      toast.error('Please fill all fields');
    }
    // Replace with actual API call to create user
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-orange-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/0d9691e4-7649-45e3-bc4e-35ada0217477.png" 
                alt="Solvibe Logo" 
                className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                Solvibe
              </h1>
              <p className="text-orange-500 text-xs font-medium">Catch the Vibe. Shine the Sale.</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/hotels" 
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium relative group text-sm"
            >
              Hotels
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/clothing" 
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium relative group text-sm"
            >
              Clothing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/pets" 
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium relative group text-sm"
            >
              Pets
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/electronics" 
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium relative group text-sm"
            >
              Electronics
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/fitness" 
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium relative group text-sm"
            >
              Fitness
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/medical-insurance" 
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium relative group text-sm"
            >
              Insurance
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button 
                variant="outline" 
                className="relative bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 hover:border-orange-600 transition-all duration-300"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50">
                  <User className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Welcome</h2>
                  <p className="text-gray-600 mb-6">To access account and manage</p>
                  {!isAuthenticated ? (
                    <>
                      <Button
                        onClick={handleGoogleLogin}
                        className="w-full mb-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center space-x-2"
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
                        <form onSubmit={handleLogin} className="space-y-4">
                          <div>
                            <label htmlFor="role-select" className="block text-sm font-medium text-gray-700">Role</label>
                            <select
                              id="role-select"
                              value={role}
                              onChange={(e) => setRole(e.target.value as 'user' | 'admin')}
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Enter User ID or Admin ID"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                              type="password"
                              name="password"
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Enter password"
                              required
                            />
                          </div>
                          <Button type="submit" className="w-full bg-red-500 text-white hover:bg-red-600" disabled={isLoading}>
                            {isLoading ? 'Signing in...' : 'LOGIN'}
                          </Button>
                          <p className="text-center text-sm text-gray-600 mt-4">
                            New user? <button onClick={() => setShowSignup(true)} className="text-red-500 hover:underline">Sign up</button>
                          </p>
                        </form>
                      ) : (
                        <form onSubmit={handleSignup} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">User ID</label>
                            <input
                              type="text"
                              name="userId"
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Enter User ID"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                              type="password"
                              name="password"
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Enter password"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                              type="password"
                              name="confirmPassword"
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Confirm password"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                            <input
                              type="tel"
                              name="mobile"
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Enter mobile number"
                              required
                            />
                          </div>
                          <Button type="submit" className="w-full bg-red-500 text-white hover:bg-red-600">
                            SIGN UP
                          </Button>
                          <p className="text-center text-sm text-gray-600 mt-4">
                            Already have an account? <button onClick={() => setShowSignup(false)} className="text-red-500 hover:underline">Login</button>
                          </p>
                        </form>
                      )}
                    </>
                  ) : (
                    <div className="text-center">
                      <p className="text-green-600 font-semibold">Welcome, User!</p>
                      {role === 'admin' ? (
                        <Button variant="outline" className="mt-4" onClick={() => navigate('/admin/dashboard')}>Admin Dashboard</Button>
                      ) : (
                        <Button variant="outline" className="mt-4">Profile</Button>
                      )}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>

            <Button className="md:hidden" variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;