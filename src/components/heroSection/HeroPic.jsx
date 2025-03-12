import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HexagonalGradientImage = ({ 
  imageSrc, 
  leftColor = "#4dd0e1", 
  rightColor = "#f5a623",
  width = 400,
  height = 460,
  borderWidth = 5
}) => {
  return (
    <div 
      className="relative"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div 
        className="absolute w-full h-full"
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: `linear-gradient(to right, ${leftColor} 0%, ${rightColor} 100%)`
        }}
      >
        <div 
          className="absolute overflow-hidden"
          style={{ 
            top: `${borderWidth}px`, 
            left: `${borderWidth}px`, 
            right: `${borderWidth}px`, 
            bottom: `${borderWidth}px`,
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        >
          <img 
            style={{objectPosition: "right"}}
            src={imageSrc} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <HexagonalGradientImage 
        imageSrc="/images/me.png"
        leftColor="#4dd0e1"
        rightColor="#f5a623"
      />

      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[720px] w-auto orange blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;