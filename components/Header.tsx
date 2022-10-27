import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";


const Header = () => {
  return (
    <header className=" sticky  top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {/* right header */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        {/* Icons */}
        <SocialIcon
          url="https://github.com/yqodsi"
          fgColor="#F4F4F4"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/yahya-qodsi-54006812a/"
          fgColor="#F4F4F4"
          bgColor="transparent"
          className="hoverIcon"
        />
        <SocialIcon
          url="https://instagram.com/yahyaqds"
          fgColor="#F4F4F4"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://t.me/yqodsi"
          fgColor="#F4F4F4"
          bgColor="transparent"
        />
      </motion.div>

      {/* left header */}

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center  cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#F4F4F4"
          bgColor="transparent"
        />
        <p className="uppercase  text-[#a8f346] hidden font-semibold tracking-wider md:inline-flex text-sm ">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
