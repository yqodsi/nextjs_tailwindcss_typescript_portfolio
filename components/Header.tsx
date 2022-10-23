import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
          url="https://linkedin.com/in/jaketrent"
          fgColor="#EDEDEE"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/jaketrent"
          fgColor="#EDEDEE"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/jaketrent"
          fgColor="#EDEDEE"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/jaketrent"
          fgColor="#EDEDEE"
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
          fgColor="#EDEDEE"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm ">Get In Touch</p>
      </motion.div>
    </header>
  );
};

export default Header;
