"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/store/actions/userActions";

export default function LoginPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  useEffect(() => {
    if (!data) {
      dispatch(fetchUser(1)); // Fetch user with ID 1
    }
  }, [data]);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <p className="text-gray-600">This is the login page.</p>
    </div>
  );
}
