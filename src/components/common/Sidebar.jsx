"use client";

import Link from "next/link";
import {
  BellIcon,
  UserIcon,
  HomeIcon,
  LucideShieldQuestion,
  ShoppingBasket,
} from "lucide-react";
import { AppLogoIcon, MaleAvatarIcon } from "@/utils/Icons";

export default function Sidebar({ className }) {
  const sideBarContent = [
    {
      icon: HomeIcon,
      label: "Home",
      href: "/",
    },
    {
      icon: LucideShieldQuestion,
      label: "Queries",
      href: "/queries",
    },
    {
      icon: ShoppingBasket,
      label: "MarketPlace",
      href: "/marketplace",
    },
    {
      icon: BellIcon,
      label: "Notification",
      href: "/notifications",
    },
    {
      icon: UserIcon,
      label: "Profile",
      href: "/user/profile",
    },
  ];

  function renderButton({ icon: Icon, label, href = "#" }) {
    return (
      <li className="w-full" key={label}>
        <Link
          href={href}
          className="w-full py-3 px-4 flex justify-between items-center bg-gray-900 dark:bg-white dark:text-gray-900 rounded-2xl hover:text-gray-400"
        >
          <Icon /> <p className="w-5/6 text-start">{label}</p>
        </Link>
      </li>
    );
  }

  return (
    <div
      className={`${className} flex flex-col justify-between items-center w-64 h-screen overflow-y-auto bg-gray-800 text-white p-4 dark:bg-gray-600 dark:text-gray-white`}
    >
      <Link
        href="/user/login"
        className="mb-4  dark:text-gray-800 flex  flex-col items-center justify-center"
      >
        <AppLogoIcon /> <p className="text-white font-thin">Campus Link</p>
      </Link>
      <ul className="space-y-2 justify-self-start h-3/4 flex flex-col w-full mt-8">
        {sideBarContent.map((item, index) =>
          renderButton({
            icon: item.icon,
            label: item.label,
            href: item.href,
          })
        )}
      </ul>
      <div className="flex items-center space-x-4 border-t w-full pt-2">
        <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center">
          <MaleAvatarIcon className="text-white w-6 h-6" />
        </div>
        <div className="flex flex-col text-start">
          <p className="text-lg font-semibold">Sanket Kumar</p>
          <p className="text-sm font-thin">Student</p>
        </div>
      </div>
    </div>
  );
}
