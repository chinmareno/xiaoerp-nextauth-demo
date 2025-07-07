"use client";

import { useEffect, type ReactNode } from "react";
import { signOut, useSession } from "next-auth/react";
import { api } from "@/trpc/react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const session = useSession();

  const { isLoading, data } = api.user.verifyUserSession.useQuery(undefined, {
    enabled: session.status === "authenticated",
  });

  useEffect(() => {
    if (session.status === "unauthenticated" || (!isLoading && data === null)) {
      void signOut({ redirectTo: "/login" });
    }
  }, [session.status, isLoading, data]);

  if (session.status === "loading" || isLoading || !data) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default AppLayout;
