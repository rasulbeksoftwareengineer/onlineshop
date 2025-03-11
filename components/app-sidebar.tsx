"use client"

import * as React from "react"
import {
  Box,
  ShoppingBag,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Products",
      url: "/dashboard/products",
      icon: Box,
      isActive: true,
    }
  ]

}

type AppSidebarProps = { email?: string } & React.ComponentProps<typeof Sidebar>;


export function AppSidebar({ email, ...props }: AppSidebarProps) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <ShoppingBag className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">OnlineShop</span>
                  <span className="truncate text-xs">Shop</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      {
        email && (
          <SidebarFooter>
            <NavUser email={email} />
          </SidebarFooter>
        )
      }
    </Sidebar>
  )
}