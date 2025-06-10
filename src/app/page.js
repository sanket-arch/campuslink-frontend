"use client";
import { ModeToggle } from "@/components/common/ModeToggle";
import RightPanel from "@/components/common/RightPannel";
import Sidebar from "@/components/common/Sidebar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { showToast } from "@/store/reducers/globalReducers";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isUserLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    // Check if user is logged in, if not redirect to login page
    if (!isUserLoggedIn) {
      router.push("/user/login");
    } else {
      dispatch(showToast({ message: "Welcome back!", title: "Notification" }));
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
