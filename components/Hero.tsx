import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CirclePulses from "./CirclePulses";
import Image from "next/image";
import { motion } from "framer-motion";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CodeIcon from "@mui/icons-material/Code";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import Link from "next/link";
import ButtonInfo from "./ButtonInfo";

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
    <div className="h-screen flex relative flex-col space-y-8 items-center justify-center text-center  overflow-hidden">
      <div className="border w-36 h-36">
        <CirclePulses />
        <Image
          className="absolute rounded-full   object-cover"
          src="/pf.webp"
          alt="img"
          width={200}
          height={200}
        />
      </div>
      <div>
        <h2 className=" text-secondary   uppercase font-medium pb-2 tracking-[10px]">
          web developer
        </h2>
        <h1 className="text-2xl pb-8 md:text-4xl text-third pt-5 font-bold lg:text-5xl x-16">
          <span>{text}</span>
          <Cursor cursorColor="#a8f346" />
        </h1>
        <div className="md:pt-32 flex flex-col pt-6  md:flex-row gap-8 justify-center items-center">
          <Link href="about">
            <a>
              <ButtonInfo
                text="About"
                link="about"
                color="third"
                icon={
                  <AccountCircleIcon
                    style={{
                      color: "#3C3C3C",
                    }}
                    fontSize="large"
                  />
                }
              />
            </a>
          </Link>
          {/* <Link href="experience">
            <a>
              <ButtonInfo
                text="<Experience />"
                link="experience"
                color="third"
                icon={
                  <AccountCircleIcon
                    style={{
                      color: "#3C3C3C",
                    }}
                    fontSize="large"
                  />
                }
              />
            </a>
          </Link> */}
          <Link href="skills">
            <a>
              <ButtonInfo
                text="Skills"
                link="skills"
                color="third"
                icon={
                  <CodeIcon
                    style={{
                      color: "#3C3C3C",
                    }}
                    fontSize="large"
                  />
                }
              />
            </a>
          </Link>
          <Link href="projects">
            <a>
              <ButtonInfo
                text="Projects"
                link="projects"
                color="third"
                icon={
                  <EmojiEventsIcon
                    style={{
                      color: "#3C3C3C",
                    }}
                    fontSize="large"
                  />
                }
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
