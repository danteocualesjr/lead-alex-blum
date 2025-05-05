
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={handleLinkClick}>
            <h1 className="text-2xl font-serif font-bold text-navy">
              Alex Blum <span className="text-teal">CPA</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="nav-link flex items-center" 
                onClick={toggleServices}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-60 rounded-md shadow-lg glass overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left z-50">
                <div className="py-1">
                  <Link 
                    to="/individual-accounting" 
                    className="block px-4 py-3 text-sm hover:bg-gray-100/60 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Individual Accounting
                  </Link>
                  <Link 
                    to="/gift-tax-trusts-and-estates" 
                    className="block px-4 py-3 text-sm hover:bg-gray-100/60 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Gift Tax, Trusts, and Estates
                  </Link>
                  <Link 
                    to="/business-services" 
                    className="block px-4 py-3 text-sm hover:bg-gray-100/60 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Business Services
                  </Link>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/contact" className="btn-primary">Get Started</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-navy"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden glass border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-3 text-base font-medium hover:bg-gray-100/60 rounded-md transition-colors"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                className="flex justify-between items-center w-full px-3 py-3 text-base font-medium hover:bg-gray-100/60 rounded-md transition-colors"
                onClick={toggleServices}
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link 
                    to="/individual-accounting" 
                    className="block px-3 py-2 text-base hover:bg-gray-100/60 rounded-md transition-colors"
                    onClick={handleLinkClick}
                  >
                    Individual Accounting
                  </Link>
                  <Link 
                    to="/gift-tax-trusts-and-estates" 
                    className="block px-3 py-2 text-base hover:bg-gray-100/60 rounded-md transition-colors"
                    onClick={handleLinkClick}
                  >
                    Gift Tax, Trusts, and Estates
                  </Link>
                  <Link 
                    to="/business-services" 
                    className="block px-3 py-2 text-base hover:bg-gray-100/60 rounded-md transition-colors"
                    onClick={handleLinkClick}
                  >
                    Business Services
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className="block px-3 py-3 text-base font-medium hover:bg-gray-100/60 rounded-md transition-colors"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-3 text-base font-medium hover:bg-gray-100/60 rounded-md transition-colors"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link 
                to="/contact" 
                className="block w-full text-center btn-primary"
                onClick={handleLinkClick}
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
