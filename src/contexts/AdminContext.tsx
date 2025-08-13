import React, { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from 'react';

export interface Admin {
  id: string;
  email: string;
  role: 'super_admin' | 'pets' | 'clothing' | 'printed' | 'hotels' | 'medical' | 'agriculture' | 'electronics' | 'vehicles' | 'fitness';
  name: string;
}

interface AdminContextType {
  admin: Admin | null;
  setAdmin: Dispatch<SetStateAction<Admin | null>>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AdminContext = createContext<AdminContextType>({
  admin: null,
  setAdmin: () => {}, // Default no-op function
  login: async () => false,
  logout: () => {},
  isLoading: false,
});

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if admin is already logged in
    const savedAdmin = localStorage.getItem('solvibe_admin');
    if (savedAdmin) {
      setAdmin(JSON.parse(savedAdmin));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundAdmin = mockAdmins.find(a => a.email === email && a.password === password);
    
    if (foundAdmin) {
      const adminData = { 
        id: foundAdmin.id, 
        email: foundAdmin.email, 
        role: foundAdmin.role, 
        name: foundAdmin.name 
      };
      setAdmin(adminData);
      localStorage.setItem('solvibe_admin', JSON.stringify(adminData));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem('solvibe_admin');
  };

  return (
    <AdminContext.Provider value={{ admin, setAdmin, login, logout, isLoading }}>
      {children}
    </AdminContext.Provider>
  );
};

// Mock admin data - replace with actual backend integration
const mockAdmins: (Admin & { password: string })[] = [
  { id: '1', email: 'admin@solvibe.com', password: 'admin123', role: 'super_admin', name: 'Super Admin' },
  { id: '2', email: 'pets@solvibe.com', password: 'pets123', role: 'pets', name: 'Pets Manager' },
  { id: '3', email: 'clothing@solvibe.com', password: 'clothing123', role: 'clothing', name: 'Clothing Manager' },
  { id: '4', email: 'printed@solvibe.com', password: 'printed123', role: 'printed', name: 'Printed Items Manager' },
  { id: '5', email: 'hotels@solvibe.com', password: 'hotels123', role: 'hotels', name: 'Hotels Manager' },
  { id: '6', email: 'medical@solvibe.com', password: 'medical123', role: 'medical', name: 'Medical Manager' },
  { id: '7', email: 'agriculture@solvibe.com', password: 'agriculture123', role: 'agriculture', name: 'Agriculture Manager' },
  { id: '8', email: 'electronics@solvibe.com', password: 'electronics123', role: 'electronics', name: 'Electronics Manager' },
  { id: '9', email: 'vehicles@solvibe.com', password: 'vehicles123', role: 'vehicles', name: 'Vehicles Manager' },
  { id: '10', email: 'fitness@solvibe.com', password: 'fitness123', role: 'fitness', name: 'Fitness Manager' },
];

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};