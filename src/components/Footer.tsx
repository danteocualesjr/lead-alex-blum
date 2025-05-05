
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">
              Alex Blum <span className="text-teal">CPA</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Professional tax accounting and preparation services for individuals, families, and businesses.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/individual-accounting" className="text-gray-300 hover:text-white transition-colors">
                  Individual Accounting
                </Link>
              </li>
              <li>
                <Link to="/gift-tax-trusts-and-estates" className="text-gray-300 hover:text-white transition-colors">
                  Gift Tax, Trusts, and Estates
                </Link>
              </li>
              <li>
                <Link to="/business-services" className="text-gray-300 hover:text-white transition-colors">
                  Business Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-0.5 text-teal" />
                <span>(410) 844-4270</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-0.5 text-teal" />
                <a href="mailto:ablum@alexblumcpa.com" className="hover:text-teal transition-colors">
                  ablum@alexblumcpa.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-teal" />
                <span>600 Wyndhurst Ave, Suite #300<br />Baltimore, MD 21210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Alex Blum CPA, LLC. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <p className="text-gray-400 text-sm">
                Locally owned and operated from Baltimore, MD
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
