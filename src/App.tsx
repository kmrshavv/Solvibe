import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { AdminProvider } from "./contexts/AdminContext";
import AdminRoute from "./components/AdminRoute";
import Index from "./pages/Index";
import Hotels from "./pages/Hotels";
import Clothing from "./pages/Clothing";
import Pets from "./pages/Pets";
import PrintedItems from "./pages/PrintedItems";
import MedicalInsurance from "./pages/MedicalInsurance";
import Agriculture from "./pages/Agriculture";
import Electronics from "./pages/Electronics";
import Vehicles from "./pages/Vehicles";
import Fitness from "./pages/Fitness";
import Careers from "./pages/Careers";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AdminProductForm from "./pages/AdminProductForm";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <AdminProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/clothing" element={<Clothing />} />
              <Route path="/pets" element={<Pets />} />
              <Route path="/printed-items" element={<PrintedItems />} />
              <Route path="/medical-insurance" element={<MedicalInsurance />} />
              <Route path="/agriculture" element={<Agriculture />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/fitness" element={<Fitness />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route 
                path="/admin/dashboard" 
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                } 
              />
              <Route 
                path="/admin/products/:category" 
                element={
                  <AdminRoute>
                    <AdminProducts />
                  </AdminRoute>
                } 
              />
              <Route 
                path="/admin/products/:category/add" 
                element={
                  <AdminRoute>
                    <AdminProductForm />
                  </AdminRoute>
                } 
              />
              <Route 
                path="/admin/products/:category/edit/:productId" 
                element={
                  <AdminRoute>
                    <AdminProductForm />
                  </AdminRoute>
                } 
              />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AdminProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;