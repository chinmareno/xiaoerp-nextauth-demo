"use client";

import type { ReactElement } from "react";
import { HideOnScrollWrapper } from "@/components/wrapper/HideOnScrollWrapper";
import { Footer } from "./_components/Footer";
import { DesktopNavbar } from "./_components/Navbar/DesktopNavbar";
import { MobileNavbar } from "./_components/Navbar/MobileNavbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const LandingPageLayout = ({
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}) => {
  const session = useSession();
  if (session.status === "authenticated") redirect("/dashboard");
  return (
    <div className="bg-background text-text-primary">
      <div className="fixed z-50 block w-full sm:hidden">
        <MobileNavbar />
      </div>
      <div className="fixed z-50 hidden w-full sm:block">
        <HideOnScrollWrapper>
          <DesktopNavbar />
        </HideOnScrollWrapper>
      </div>
      <div className="pt-28">{children}</div>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
