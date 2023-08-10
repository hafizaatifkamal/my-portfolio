import React from "react";
import HomeIntro from "./components/Intro";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto flex-grow">
        <HomeIntro />
      </main>
    </div>
  );
};

export default Home;
