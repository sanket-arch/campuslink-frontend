"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4 dark:bg-white dark:text-gray-800">
      <Link href="/user/login" className="text-xl font-bold mb-4">Campus Link</Link>
      <ul className="space-y-2">
        <li><Button className="hover:text-gray-400" >Profile</Button></li>
      </ul>
    </div>
  );
}