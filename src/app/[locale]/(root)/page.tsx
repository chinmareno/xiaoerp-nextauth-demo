"use client";

import { HideOnScrollWrapper } from "@/components/wrapper/HideOnScrollWrapper";
import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/Hero";
import { ModulesOverview } from "./_components/ModulesOverview";
import { Footer } from "./_components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <HideOnScrollWrapper>
        <Navbar />
      </HideOnScrollWrapper>
      <Hero />
      <ModulesOverview />
      <Footer />
    </div>
  );
};

export default LandingPage;
