"use server";

import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Footer from "../_components/_partial/Footer";
import AdminSidebar from "../_components/_partial/Sidebar";
import TopBar from "../_components/_partial/TobBar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: AdminLayoutProps) {
  const session = await auth();

  if (!session || session?.user.role !== "admin") return redirect("/login");

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AdminSidebar />
        <SidebarInset className="flex w-full flex-grow flex-col">
          <TopBar />
          <ScrollArea>
            <main className="w-full flex-1 overflow-y-auto p-6">
              <div className="container mx-auto">{children}</div>
            </main>
          </ScrollArea>
          <Footer />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
