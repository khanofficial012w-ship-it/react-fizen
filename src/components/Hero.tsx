import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Start Managing Your Finance",
  subtitle = "Simplify your financial life. Our intuitive app makes managing your money effortless.",
  buttonText = "Get Started Free",
  buttonLink = "/pricing",
  imageUrl = "https://framerusercontent.com/images/2PJCBW3k14Gd59z05NimgBmXjSA.png",
}) => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold leading-tight text-gray-900"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={buttonLink}
                className="inline-flex items-center justify-center bg-blue-600 text-white font-medium rounded-full px-8 py-3 hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
              >
                {buttonText}
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="flex-1 hover-3d "
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <figure className="max-w-full rounded-2xl">
              <img
                src={imageUrl}
                alt="Hero preview"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
              />
            </figure>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
