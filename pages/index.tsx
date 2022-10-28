import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div className="bg-[#3C3C3C] text-white h-screen snap-y snap-mandatory overflow-scroll z-3">
      <Head>
        <title>Yahya Portfolio</title>
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

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
