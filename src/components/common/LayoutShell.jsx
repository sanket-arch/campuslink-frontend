"use client";

import Sidebar from "@/components/common/Sidebar";
import HamburgerMenu from "@/components/common/HamburgurMenu";
import { usePathname } from "next/navigation";

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const authRoutes = ["/user/login", "/user/signup", "/user/forgot"];
  const isAuthPage = authRoutes.includes(pathname);

  if (isAuthPage) {
    return children;
  }

  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar className="hidden md:block" />
      <HamburgerMenu className="md:hidden" />
      <main className="flex-1">{children}</main>
    </div>
  );
}
