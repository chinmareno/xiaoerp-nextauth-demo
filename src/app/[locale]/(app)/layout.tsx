"use client";

import { useEffect, type ReactNode } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/login");
    if (session.status === "unauthenticated") {
      router.push("/login");
    }
  }, [session.status, router]);
  if (session.status === "loading" || session.status === "unauthenticated")
    return <div>Loading...</div>;

  return <>{children};</>;
};

export default AppLayout;
