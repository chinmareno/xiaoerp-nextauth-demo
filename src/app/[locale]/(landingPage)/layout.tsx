"use client";

import type { ReactElement } from "react";
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";
import { HideOnScrollWrapper } from "@/components/wrapper/HideOnScrollWrapper";

const LandingPageLayout = ({
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}) => {
  return (
    <div className="min-h-screen">
      <HideOnScrollWrapper>
        <Navbar />
      </HideOnScrollWrapper>
      {children}
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
