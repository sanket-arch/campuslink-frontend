import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { showToast } from "@/store/reducers/globalReducers";
import Cookies from "js-cookie";

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

  return (
    <div className="flex flex-col w-full p-4 ">
      <h2>This is right pannel</h2>
    </div>
  );
}
