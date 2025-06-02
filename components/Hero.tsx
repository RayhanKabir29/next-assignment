import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import icon from "../public/star.png";


const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white">

      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#000]/20 rounded-full blur-[100px] z-0" />
      <div className="absolute top-40 -left-20 w-96 h-96 bg-[#000]/20 rounded-full blur-[100px] z-0" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-12 z-10">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full  relative z-10 ">
            <div
              className="w-full h-[53vh] md:h-[70vh] "
              style={{
                backgroundImage: `url('/right_banner.png')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "top center",
              }}
            >
            </div>
          </div>
          <div className="w-full  text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-[45px] font-bold leading-tight mb-4 text-white md:absolute md:left-2 md:top-28 md:z-30">
              Want to Turn Social Media Into a <br />Profitable Career?{" "}

            </h1>
            <h1 className="leading-tight glitch-text text-[#00E7F9] text-2xl md:text-[44px] font-bold md:absolute md:left-2 md:top-48 md:z-30">
              Discover your way to success <br />
              <span> with Fametonic:</span>
            </h1>

            <ul className="space-y-4 mb-8 text-left md:text-left md:absolute md:left-2 md:top-80 md:z-30">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#FF0059] mr-3 mt-1">
                    <Image src={icon} width={20} height={20} alt="icon" />
                  </span>
                  <span className="text-white text-xl">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="md:absolute md:left-2 md:top-[550px] md:z-30">
              <div className="flex flex-col-reverse md:flex-col items-center md:items-start text-center md:text-left">
                <div className="footer-top mt-4 md:mt-0">
                  <button
                    className="bg-[#FF0059] hover:bg-[#FF0059]/90 text-white font-bold py-2 px-20 rounded-lg
        flex items-center justify-center transition-all duration-300 transform hover:scale-105
        shadow-[3px_3px_6px_#00ffff]"
                  >
                    GET STARTED <ArrowRight className="ml-2 h-5 w-5" />
                  </button>

                  <p className="text-gray-400 text-sm mt-3 md:ml-10">
                    1-minute quiz for personalized insights
                  </p>
                </div>
                <div className="footer-bottom">
                  <p className="text-gray-500 text-xs mt-6">
                    By clicking Get Started, you agree with Terms and Conditions,
                    Privacy Policy, Subscription Terms.
                  </p>
                  <p className="text-gray-600 text-xs mt-4">
                    Fametonic 2025 All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers",
];

export default Hero; 