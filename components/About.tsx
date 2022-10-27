import React from "react";

type Props = {};

const About = (props: Props) => {
  // centered about

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="text-xl font-medium">I&apos;m a Full Stack Developer</p>
    </div>
  );
};

export default About;
