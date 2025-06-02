import React from 'react';
import { Sparkles } from 'lucide-react';

const Banner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#FF0059] to-[#00E9FF] py-2 px-4 text-center relative overflow-hidden">
      <div className="relative z-10 flex items-center justify-center space-x-2">
        <span className="font-medium text-white">
          <span className="font-bold"><span className='text-[#00E7F9]'>🚀 FRESH BEGINNINGS SALE: </span>Extra 25% OFF, Limited Spots - start your journey today!</span>
        </span>
      </div>
    </div>
  );
};

export default Banner;
