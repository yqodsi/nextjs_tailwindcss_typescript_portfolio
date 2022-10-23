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
        className=" w-[210px] h-[210px] bg-[#EDEDEE] rounded-full mt-[200px] absolute"
        /**
         * Setting the initial keyframe to "null" will use
         * the current value to allow for interruptable keyframes.
         */
        animate={{ scale: [0, 1.5, 1], opacity: [0.5,1, 0] }}
        transition={{ duration: 2, repeat: 2 }}
      />
    </div>
  );
};

export default CirclePulses;
