'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import logo from "../public/logo.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full py-8 md:py-4 px-6 md:px-12 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'} relative`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-between relative">

        <div className="flex-1 md:flex-none md:static absolute inset-x-0 flex justify-center md:justify-start z-10">
          <Link href="/" className="relative">
            <Image src={logo} height={73} width={170} alt='logo' />
          </Link>
        </div>

  
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          <Link href="/about" className="text-white hover:text-[#00E9FF] transition-colors">
            About us
          </Link>
          <Link href="/contact" className="text-white hover:text-[#00E9FF] transition-colors">
            Contact
          </Link>
        </div>

       
        <button
          className="md:hidden text-white z-20 ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

  
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md z-40 py-4 px-6 border-t border-gray-800">
          <div className="flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-white hover:text-[#00E9FF] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#00E9FF] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;