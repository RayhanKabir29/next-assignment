import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-white text-xl font-bold">
              fame
              <span className="relative">
                tonic
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-[#FF0059] rounded-full"></span>
              </span>
            </span>
            <p className="text-gray-400 text-sm mt-2">Transform your social media presence</p>
          </div>
          
          <div className="flex space-x-8">
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Fametonic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;