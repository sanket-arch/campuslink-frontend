"use client";
import { ModeToggle } from "@/components/common/ModeToggle";
import RightPanel from "@/components/common/RightPannel";
import Sidebar from "@/components/common/Sidebar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import _ from "lodash";

export default function Home() {
  const router = useRouter();
  const { isUserLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    // Check if user is logged in, if not redirect to login page
    if (!isUserLoggedIn) {
      router.push("/user/login");
    }
  }, [isUserLoggedIn]);

  return (
    <div className="text-center">
      {isUserLoggedIn&& (
        <div className="flex flex-row justify-between items-start p-4">
          <Sidebar />
          <RightPanel />
        </div>
      )}
    </div>
  );
}
