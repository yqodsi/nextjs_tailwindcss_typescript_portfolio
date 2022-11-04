import React from "react";
import { motion } from "framer-motion";

type Props = {};

const CirclePulses = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      <motion.div
        className=" w-[155px] h-[155px] md:w-[220px] md:h-[220px] border-secondary  border-[10px] md:border-[10px] rounded-full  md:mt-[200px] mt-[144px] absolute"
        initial={{
          opacity: 0,
          scale: 1.1,
        }}
        animate={{
          y: 0,
          x: 0,
          scale: [1.1, 1],
          opacity: [0, 0.1, 0.2, 0.5, 1],
        }}
        transition={{ duration: 0.3, delay: 1.6, repeat: 0 }}
      />
    </div>
  );
};

export default CirclePulses;
