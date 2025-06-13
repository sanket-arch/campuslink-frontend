"use client";
import RightPanel from "@/components/common/RightPannel";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Spinner } from "@/components/ui/Spinner";

export default function Home() {
  const router = useRouter();
  const { isUserLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push("/user/login");
    }
  }, [isUserLoggedIn]);

  if (!isUserLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full">
        <Spinner className="text-primary dark:text-secondary" size="large" />
      </div>
    );
  }

  return <div className="text-center">{isUserLoggedIn &&  <RightPanel />}</div>;
}
