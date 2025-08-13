
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  LogOut, 
  Plus, 
  Edit, 
  BarChart3, 
  Users,
  Package,
  Heart,
  Shirt,
  Printer,
  Building,
  Cross,
  Wheat,
  Smartphone,
  Car,
  Dumbbell
} from 'lucide-react';

const AdminDashboard = () => {
  const { admin, logout } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate('/admin/login');
    }
  }, [admin, navigate]);

  if (!admin) return null;

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'pets': return <Heart className="h-5 w-5" />;
      case 'clothing': return <Shirt className="h-5 w-5" />;
      case 'printed': return <Printer className="h-5 w-5" />;
      case 'hotels': return <Building className="h-5 w-5" />;
      case 'medical': return <Cross className="h-5 w-5" />;
      case 'agriculture': return <Wheat className="h-5 w-5" />;
      case 'electronics': return <Smartphone className="h-5 w-5" />;
      case 'vehicles': return <Car className="h-5 w-5" />;
      case 'fitness': return <Dumbbell className="h-5 w-5" />;
      default: return <Shield className="h-5 w-5" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'pets': return 'bg-green-100 text-green-800';
      case 'clothing': return 'bg-purple-100 text-purple-800';
      case 'printed': return 'bg-blue-100 text-blue-800';
      case 'hotels': return 'bg-orange-100 text-orange-800';
      case 'medical': return 'bg-red-100 text-red-800';
      case 'agriculture': return 'bg-green-100 text-green-800';
      case 'electronics': return 'bg-cyan-100 text-cyan-800';
      case 'vehicles': return 'bg-gray-100 text-gray-800';
      case 'fitness': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAccessibleSections = () => {
    if (admin.role === 'super_admin') {
      return ['pets', 'clothing', 'printed', 'hotels', 'medical', 'agriculture', 'electronics', 'vehicles', 'fitness'];
    }
    return [admin.role];
  };

  const accessibleSections = getAccessibleSections();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {admin.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className={getRoleColor(admin.role)}>
                {getRoleIcon(admin.role)}
                <span className="ml-1 capitalize">{admin.role.replace('_', ' ')}</span>
              </Badge>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Overview */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,329</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">892</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Management Sections */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Product Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessibleSections.map((section) => (
              <Card key={section} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {getRoleIcon(section)}
                    <span className="capitalize">{section} Products</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full" 
                    onClick={() => navigate(`/admin/products/${section}`)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Manage Products
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate(`/admin/products/${section}/add`)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Product
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
