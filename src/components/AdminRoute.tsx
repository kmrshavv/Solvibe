
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';

interface AdminRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children, requiredRole }) => {
  const { admin } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate('/admin/login');
      return;
    }

    if (requiredRole && admin.role !== 'super_admin' && admin.role !== requiredRole) {
      navigate('/admin/dashboard');
      return;
    }
  }, [admin, requiredRole, navigate]);

  if (!admin) {
    return <div>Loading...</div>;
  }

  if (requiredRole && admin.role !== 'super_admin' && admin.role !== requiredRole) {
    return <div>Access Denied</div>;
  }

  return <>{children}</>;
};

export default AdminRoute;
