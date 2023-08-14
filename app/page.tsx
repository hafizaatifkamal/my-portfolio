import React from "react";
import HomeIntro from "./components/Intro";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto flex-grow overflow-hidden lg:overflow-auto">
        <HomeIntro id="intro" />
        <About id="about" />
        <Projects id="projects" />
        <Experience id="experience" />
        <Contact id="contact" />
      </main>
    </div>
  );
};

export default Home;
