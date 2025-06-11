"use client";
import RightPanel from "@/components/common/RightPannel";
import Sidebar from "@/components/common/Sidebar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import _ from "lodash";
import HamburgerMenu from "@/components/common/HamburgurMenu";

export default function Home() {
  const router = useRouter();
  const { isUserLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push("/user/login");
    }
  }, [isUserLoggedIn]);

  return (
    <div className="text-center">
      {isUserLoggedIn && (
        <div className="flex flex-row justify-between items-start h-screen">
          <Sidebar className="hidden md:block" />
          <HamburgerMenu className="hidden md:block text-4xl text-gray-500 mt-4" />
          <RightPanel />
        </div>
      )}
    </div>
  );
}
