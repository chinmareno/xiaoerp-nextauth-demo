"use client";

import type { ReactNode } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import { AppTopbar } from "./_components/AppTopbar";
import { Progress } from "@/components/ui/progress";
import { useLoadingStore } from "@/hooks/useLoadingStore";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { loading } = useLoadingStore();
  return (
    <>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <Progress
            value={loading}
            className="fixed top-0 left-0 z-50 h-1 w-full"
          />
          <AppSidebar />
          <SidebarInset>
            <AppTopbar />
            <main className="flex-1 bg-gray-50 p-6">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
