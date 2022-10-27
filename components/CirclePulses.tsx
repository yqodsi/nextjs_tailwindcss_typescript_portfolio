import React from "react";
import { motion } from "framer-motion";

type Props = {};

const CirclePulses = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      {/* <div className="h-20 w-20 bg-white rounded-full absolute animate-ping"></div>
      <div className="h-52 w-52 bg-white rounded-full absolute animate-ping"></div>
      <div className="h-96 w-96 bg-white rounded-full absolute animate-pulse"></div> */}

   
      <motion.div
        className=" w-[220px] h-[220px] border-[#81e462dd] border-[10px] rounded-full mt-[200px] absolute"
        /**
         * Setting the initial keyframe to "null" will use
         * the current value to allow for interruptable keyframes.
         */
        initial={{
          scale: 0,
          opacity: 0,
          y: 500,
          x: 0,
        }}
  
        animate={{  y: 0, x: 0  , scale: [0, 0, 1], opacity: [0, 0.5, 1] }}
        transition={{ duration: 1,  }}
      />
    </div>
  );
};

export default CirclePulses;
