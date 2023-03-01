import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="relative h-screen flex md:flex-row flex-col text-center md:text-left items-center justify-evenly w-xl md:max-w-7xl  mx-auto">
      <a
        className="group relative inline-block focus:outline-none focus:ring"
        href="/download"
      >
        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

        <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
          Download
        </span>
      </a>

      <a
        className="group relative inline-block focus:outline-none focus:ring"
        href="/download"
      >
        <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

        <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
          Download
        </span>
      </a>
    </div>
  );
};

export default About;
