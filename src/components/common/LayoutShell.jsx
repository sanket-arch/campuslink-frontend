"use client";
import Sidebar from "@/components/common/Sidebar";
import HamburgerMenu from "@/components/common/HamburgurMenu";
import Navbar from "@/components/common/Navbar"; // If you have a navbar
import { usePathname } from "next/navigation";

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const authRoutes = ["/user/login", "/user/signup", "/user/forgot"];
  const isAuthPage = authRoutes.includes(pathname);

  if (isAuthPage) {
    return children;
  }

  return (
    <div className="flex h-screen">
      <Sidebar className="hidden md:block w-64 flex-shrink-0" />
      <HamburgerMenu className="md:hidden" />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}