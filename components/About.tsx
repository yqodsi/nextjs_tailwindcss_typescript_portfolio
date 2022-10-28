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
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover rounded-full  md:h-64 md:w-64 xl:w-[500px] xl:h-[500px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="https://i.pinimg.com/736x/be/d9/2c/bed92cdaa8c3880d5fe77735bb8fecea--the-gorilla-planet-of-the-apes.jpg"
        alt="Landscape picture"
      />
      <div>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          impedit quod distinctio, tempore aliquam amet pariatur sapiente dolore
          eos minus sit natus, fuga deleniti ipsam labore praesentium ab quam
          incidunt excepturi alias debitis numquam. Ullam, quam consequatur!
          Porro, quo quia!
        </h3>
      </div>
    </div>
  );
};

export default About;
