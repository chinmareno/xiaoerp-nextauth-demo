"use client";

import { HideOnScrollWrapper } from "~/components/wrapper/HideOnScrollWrapper";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Navbar } from "./_components/Navbar";
import { ModulesOverview } from "./_components/Overview";

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
