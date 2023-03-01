import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Section from "../components/Section";

const Home: NextPage = () => {
  return (
    <div className="bg-[#3C3C3C] text-white h-screen snap-y snap-mandatory overflow-x-hidden z-3">
      <Head>
        <title>Yahya's Portfolio</title>
      </Head>

      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <div id="about" className="snap-center">
        <About />
      </div>
      {/* Experience */}

      <div id="section" className="snap-center">
        <Section />
      </div>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
