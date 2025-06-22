import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { showToast } from "@/store/reducers/globalReducers";
import Cookies from "js-cookie";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Calendar,
  MessageCircleQuestion,
  ShoppingCart,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function RightPanel() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isUserLoggedIn, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isUserLoggedIn) {
      dispatch(
        showToast({
          message: "Logged out successfully",
          type: "success",
        })
      );
      Cookies.remove("auth_token", { path: "/" });
      router.push("/user/login");
      return;
    } else if (error) {
      dispatch(
        showToast({
          message: "Something went wrong, please try again later",
          title: "Error",
          type: "error",
        })
      );
    }
  }, [isUserLoggedIn, error]);

  const middleContent = [
    {
      icon: MessageCircleQuestion,
      content: "Post Queries",
      url: "/queries",
    },
    {
      icon: Star,
      content: "Share Reviews",
      url: "/queries",
    },
    {
      icon: ShoppingCart,
      content: "Sell Items",
      url: "/queries",
    },
    {
      icon: Calendar,
      content: "View Events",
      url: "/queries",
    },
  ];

  return (
    <div className="flex flex-col w-full p-4">
      <Card className="bg-gray-primary text-white text-left">
        <CardContent>
          <h1 className="text-2xl">Hello Username!</h1>
          <p className="text-lg leading-6">Let's connect and collaborate</p>
        </CardContent>
      </Card>
      <div className="flex gap-4 py-6 px-2 justify-between items-center">
        {middleContent.map((item) => (
          <Link key={item.content} href={item.url} className="w-64">
            <Card className="hover:shadow-xl transition-all duration-300 ease-in-out">
              <CardContent className="flex flex-col justify-between items-center">
                <div className="flex justify-center items-center bg-gray-800 text-gray-100 p-3 w-fit rounded-2xl">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="leading-8">{item.content}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex justify-between gap-4 p-2 text-left">
        {/* LEFT PANEL */}
        <Card className="w-2/3 flex flex-col">
          <CardHeader>Recent Queries and Reviews</CardHeader>
          <CardContent className="space-y-2">
            {[...Array(10)].map((_, i) => (
              <p key={i}>Query #{i + 1}</p>
            ))}
          </CardContent>
        </Card>

        {/* RIGHT PANEL */}
        <div className="w-1/3 h-full overflow-y-auto">
          <Card className="flex flex-col h-full">
            <CardHeader>Upcoming Events</CardHeader>
            <CardContent className="space-y-2">
              {[...Array(30)].map((_, i) => (
                <p key={i}>Event #{i + 1}</p>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
