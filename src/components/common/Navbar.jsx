import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { userLogout } from "@/store/actions/userActions";
import { Card } from "../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MaleAvatarIcon } from "@/utils/Icons";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const dispatch = useDispatch();

  const popoverContent = [
    {
      label: "My Queries",
      href: "/",
    },
    {
      label: "My Products",
      href: "/",
    },
    {
      label: "My Reviews",
      href: "/",
    },
    {
      label: "My Events",
      href: "/",
    },
    {
      label: "View Profile",
      href: "/user/profile",
    },
  ];

  function handleLogout() {
    dispatch(userLogout());
  }

  return (
    <Card className="rounded-none p-4">
      <nav className="flex justify-end w-[98%]">
        <Popover>
          <PopoverTrigger>
            <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
              <MaleAvatarIcon className="text-white w-6 h-6" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col mr-1.5 w-40 space-y-2 mt-3">
            {popoverContent.map((content) => (
              <Link
                key={content.label}
                href={content.href}
              >
                {content.label}
              </Link>
            ))}
            <Button onClick={handleLogout}>Logout</Button>
          </PopoverContent>
        </Popover>
      </nav>
    </Card>
  );
}
