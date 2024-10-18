import React from "react";
import { Hero } from "src/components/Hero";
import { Navbar } from "src/components/Navbar";

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Page;
