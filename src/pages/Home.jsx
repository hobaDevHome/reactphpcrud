import React from "react";
import Hero from "../components/Hero";
import OrganicSection from "../components/OrganicSection";
import Soft from "../components/Soft";
import CheckGallery from "../components/CheckGallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <CheckGallery />
      <OrganicSection />
      <Soft />
    </div>
  );
};

export default Home;
