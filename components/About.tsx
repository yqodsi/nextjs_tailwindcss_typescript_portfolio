import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="relative h-screen flex md:flex-row flex-col text-center md:text-left items-center justify-evenly w-xl md:max-w-7xl  mx-auto">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="absolute top-24  -mt-4 md:mt-0 uppercase font-extralight tracking-[20px]  text-xl md:text-2xl text-secondary"
      >
        About
      </motion.h3>
      <motion.img
        className="retro-img  ml-0 md:ml-5 -mb-16 mt-10 md:mt-10 md:mb-0 flex-shrink-0 w-44 h-44 object-cover rounded-full  md:h-64 md:w-64 xl:w-[500px] xl:h-[500px]"
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
        src="https://1.bp.blogspot.com/-dtvFFZQ2OTE/YPLdL3iKodI/AAAAAAAAkC8/HuAsGot_sI0QAzp9kqZmxHu6yZwjssOHQCLcBGAsYHQ/s16000/Alone%2BBoy%2BText%2BDP.jpg"
        alt="Landscape picture"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="space-y-10 mx-8 md:mx-12 px-0 md:px-10"
      >
        <h4 className=" text-2xl -mb-6 md:mb-0   font-semibold md:text-4xl md:font-semibold">
          Here is a{" "}
          <span className="underline decoration-secondary">little</span>{" "}
          background
        </h4>
        <h3 className="text-base -mb-6 md:text-xl text-start tracking-wider font-medium">
          I’m a web developer. I spend my whole day, practically every day,
          experimenting with HTML, CSS, and JavaScript; dabbling with{" "}
          <span className=" text-secondary">React</span> ,
          <span className=" text-secondary">Docker</span>, and{" "}
          <span className=" text-secondary">NestJs</span>; and inhaling a wide
          variety of potentially usefull and useless information through a few
          hundred <span className=" text-secondary">IT</span> feeds. I build
          websites that delight and inform. I do it well. I’m curious, and I
          enjoy work that challenges me to learn something new and stretch in a
          different direction.
        </h3>
      </motion.div>
    </div>
  );
};

export default About;
