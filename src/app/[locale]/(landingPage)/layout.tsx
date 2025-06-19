"use client";

import type { ReactElement } from "react";
import { HideOnScrollWrapper } from "@/components/wrapper/HideOnScrollWrapper";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

const LandingPageLayout = ({
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}) => {
  return (
    <div className="bg-background text-text-primary">
      <HideOnScrollWrapper>
        <Navbar />
      </HideOnScrollWrapper>
      <div className="pt-24">{children}</div>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
