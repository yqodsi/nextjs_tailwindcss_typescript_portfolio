import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CirclePulses from "./CirclePulses";
import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is Yahya",
      "I Love Coffee ☕",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center  overflow-hidden">
      <CirclePulses />
      <Image
        className="absolute rounded-full w-32 h-32  object-cover"
        src="/pf.webp"
        alt="img"
        width={200}
        height={200}
      />
      <div>
        <h2 className=" text-secondary  uppercase font-medium pb-2 tracking-[10px]">
          web developer
        </h2>
        <h1 className="text-4xl text-third pt-5 font-bold lg:text-5xl px-16">
          <span>{text}</span>
          <Cursor cursorColor="#a8f346" />
        </h1>
        <div className="pt-60 flex sm:flex-col gap-3 justify-center items-center">
          <Link href="about">
            <button className="heroButton ">About</button>
          </Link>
          <Link href="experience">
            <button className="heroButton ">Experience</button>
          </Link>
          <Link href="skills">
            <button className="heroButton ">Skills</button>
          </Link>
          <Link href="projects">
            <button className="heroButton ">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
