"use client";
export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4 dark:bg-white dark:text-gray-800">
      <a href="/" className="text-xl font-bold mb-4">Campus Link</a>
      <ul className="space-y-2">
        <li><a href="/user/login" className="hover:text-gray-400">Profile</a></li>
      </ul>
    </div>
  );
}