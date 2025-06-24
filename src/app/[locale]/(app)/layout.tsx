"use client";

import type { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const session = useSession();
  if (session.status === "unauthenticated") redirect("/login");
  return <>{children};</>;
};

export default AppLayout;
