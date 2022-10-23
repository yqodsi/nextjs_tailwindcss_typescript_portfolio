import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CirclePulses from "./CirclePulses";
import Image from "next/image";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name is Yahya", "I love Coffee", "<ButLovesToCodeMore/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center  overflow-hidden">
      <CirclePulses />
      <Image
        className="absolute rounded-full   w-32 h-32 mx-auto object-cover"
        src="/pf.webp"
        alt="Landscape picture"
        width={200}
        height={200}
      />
      <h1 className="text-5xl plg:text-6xl font-semibold py-16">
        <span>{text}</span>
        <Cursor cursorColor="#11f900" />
      </h1>
    </div>
  );
};

export default Hero;
