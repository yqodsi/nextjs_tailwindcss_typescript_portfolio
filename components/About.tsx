import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  // centered about

  return (
    <div className="relative h-screen flex flex-col text-center md:text-left items-center justify-evenly max-w-7xl border mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-secondary">
        About
      </h3>
      <motion.img
        className="absolute"
        initial={{
          x: -200,
        }}
        whileInView={{
          x: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        src="https://i.pinimg.com/736x/be/d9/2c/bed92cdaa8c3880d5fe77735bb8fecea--the-gorilla-planet-of-the-apes.jpg"
        alt="Landscape picture"
        width={400}
        height={300}
      />
    </div>
  );
};

export default About;
