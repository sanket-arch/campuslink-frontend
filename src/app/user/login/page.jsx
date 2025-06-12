"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "@/store/actions/userActions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginSvg } from "@/utils/Icons";
import Link from "next/link";
import { ACTION_BUTTONS, ACTION_LABELS } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/lib/validationSchema";
import _ from "lodash";
import { useRouter } from "next/navigation";
import { setUserLoginStatus } from "@/store/reducers/userReducers";
import { showToast } from "@/store/reducers/globalReducers";
import Cookies from "js-cookie";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loginData, loading, isUserLoggedIn, error } = useSelector(
    (state) => state.user
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = useForm({ resolver: yupResolver(loginSchema), mode: "onChange" });

  useEffect(() => {
    if (!_.isEmpty(document.cookie)) {
      const auth_Token = Cookies.get("auth_token");
      if (auth_Token) {
          dispatch(setUserLoginStatus(true));
          router.push("/");
          return;
      }
    }

    if (isUserLoggedIn && loginData && loginData?.access_token) {
      dispatch(
        showToast({
          message: "Login successful",
          title: "Success",
          type: "success",
        })
      );
      Cookies.set("auth_token", loginData.access_token, {
        expires: 30,
        path: "/",
      });
      dispatch(setUserLoginStatus(true));
      router.push("/");
    } else if (error) {
      dispatch(
        showToast({
          message: "Please check your login credentials or try again later.",
          title: "Login Failed",
          type: "error",
        })
      );
    }
  }, [isUserLoggedIn, loginData, loading]);

  function handleLogin(data) {
    dispatch(userLogin({ username: data.username, password: data.password }));
  }

  function renderInput(name, type, placeholder, label) {
    return (
      <div className="flex flex-col space-y-2 w-full">
        <Label htmlFor={name}>{label}</Label>
        <Input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className="p-2 border border-gray-300 rounded"
        />
        {errors[name] && (
          <p className="text-red-500 text-xs text-start">
            {errors[name]?.message}
          </p>
        )}
      </div>
    );
  }

  function renderButton(label, type = "button") {
    return (
      <Button
        type={type}
        disabled={!isValid || _.isEmpty(touchedFields) || loading}
        onClick={handleSubmit(handleLogin)}
        className="bg-primary text-white dark:text-primary dark:bg-secondary p-2 rounded hover:bg-primary/80 cursor-pointer w-full"
      >
        {label}
      </Button>
    );
  }
  if (isUserLoggedIn) return;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-1.5">
      <div className="flex flex-col items-center justify-center w-full md:w-2/3 p-4 md:p-8 bg-white dark:bg-background">
        <div className="mb-4 text-center">
          <h1 className="text-2xl md:text-3xl font-heading">Welcome Back</h1>
          <h3 className="text-base md:text-lg">Sign in to your account</h3>
        </div>
        <div className="w-full max-w-xs md:max-w-md">
          <form
            className="flex flex-col space-y-4 w-full"
            onSubmit={handleSubmit(handleLogin)}
          >
            {renderInput("username", "text", "Username", "Username")}
            {renderInput("password", "password", "Password", "Password")}
            <div className="flex flex-col space-y-2">
              {renderButton(ACTION_LABELS.LOGIN, ACTION_BUTTONS.SUBMIT)}
              <Link
                href="/"
                className="text-center text-link-primary font-sans"
              >
                Forgot Paassowrd?
              </Link>
              <p className="text-center">
                Don't have account?
                <Link href="/user/signup" className="ml-1 text-link-primary">
                  {ACTION_BUTTONS.REGISTER}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:flex w-1/3 h-full items-center justify-center">
        <LoginSvg />
      </div>
    </div>
  );
}
