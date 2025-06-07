"use client";

import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Navbar } from "./_components/Navbar";
import { ModulesOverview } from "./_components/Overview";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ModulesOverview />
      <Footer />
    </div>
  );
};

export default LandingPage;
