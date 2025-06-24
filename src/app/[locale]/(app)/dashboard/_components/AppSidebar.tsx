"use client";

import {
  Calculator,
  Package,
  ShoppingCart,
  ShoppingBag,
  Settings,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const mainMenuItems = [
  {
    title: "Accounting",
    url: "#",
    icon: Calculator,
  },
  {
    title: "Inventory",
    url: "#",
    icon: Package,
  },
  {
    title: "Sales",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Purchasing",
    url: "#",
    icon: ShoppingBag,
  },
];

const bottomMenuItems = [
  {
    title: "Team Members",
    url: "#",
    icon: Users,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="border-sidebar-border border-b">
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-md">
            <span className="text-sm font-bold">X</span>
          </div>
          <span className="text-sidebar-foreground font-semibold">
            Xiao ERP
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex flex-col justify-between">
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-sidebar-border border-t">
        <SidebarMenu>
          {bottomMenuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <a href={item.url} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
