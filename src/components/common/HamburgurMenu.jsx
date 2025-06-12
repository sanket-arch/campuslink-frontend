"use client";

import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

// @TODO: Remove White space for  trigger button
export default function HamburgerMenu() {
  return (
    <Sheet className="bg-gray-800">
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 text-gray-800 hover:text-gray-600 dark:text-gray-400" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-amber-300">
        <SheetTitle className="sr-only">menu</SheetTitle>
        <Sidebar className="w-full" />
      </SheetContent>
    </Sheet>
  );
}
