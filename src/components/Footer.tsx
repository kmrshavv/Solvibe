import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Users } from 'lucide-react';
// import { useCart } from '../hooks/useCart'; // Removed due to missing module


const Footer = () => {

  // Removed useCart hook usage due to missing module
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Solvibe</h3>
            <p className="text-gray-300 mb-4">Catch the Vibe. Shine the Sale.</p>
            <p className="text-gray-400 text-sm">
              Your trusted marketplace for all your needs - from insurance to lifestyle products.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-orange-400" />
              Address
            </h4>
            <div className="text-gray-300 space-y-2">
              <p>Solvibe-Ragovate</p>
              <p></p>
              <p>Kannauj</p>
              <p>Uttar Pradesh 209725, India</p>
              <div className="mt-4 space-y-1">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-orange-400" />
                  +91 6388 146 139
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-orange-400" />
                  info@xyz.com
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-300 space-y-2">
              <li>
                <Link to="/careers" className="hover:text-orange-400 transition-colors flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-orange-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Solvibe Marketplace. All rights reserved. | 
            <Link to="/careers" className="ml-1 text-orange-400 hover:text-orange-300 transition-colors">
              Join Our Team
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;