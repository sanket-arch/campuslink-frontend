"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userSignupSchema } from "@/lib/validationSchema";
import { AppLogoIcon, WelcomeIcon } from "@/utils/Icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import CustomSelect from "@/components/common/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllRoles } from "@/store/actions/roleActions";

function Signup() {
  const dispatch = useDispatch();
  const { roles } = useSelector((state) => state.role);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, touchedFields },
  } = useForm({ resolver: yupResolver(userSignupSchema), mode: "onChange" });

  useEffect(() => {
    dispatch(getAllRoles());
  }, [dispatch]);

  const onUserSignup = (data) => {
    console.log("User Signup Data: ", data);
  };

  const renderInputField = (name, type = "text", placeholder = "") => {
    return (
      <div className="mb-4">
        <Label htmlFor={name} className="block mb-2">
          {placeholder}
        </Label>
        <Input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className={`w-full p-2 border rounded ${
            errors[name] ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors[name] && (
          <span className="text-red-500 text-sm">{errors[name].message}</span>
        )}
      </div>
    );
  };

  const renderSelectField = (
    name,
    options,
    label,
    placeholder,
    isMulti = false,
    loadOptions = null
  ) => {
    return (
      <div className="mb-4">
        <Label htmlFor={name} className="block mb-2">
          {label}
        </Label>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <CustomSelect
              options={options}
              placeholder={placeholder}
              value={field.value}
              onChange={field.onChange}
              isMulti={isMulti}
              loadOptions={loadOptions}
            />
          )}
        />

        {errors[name] && (
          <span className="text-red-500 text-sm">{errors[name].message}</span>
        )}
      </div>
    );
  };

  const getRoleOptions = () => {
    if (!roles || roles.length === 0) return [];

    return roles
      .map((role) => ({
        value: role.id,
        label: role.name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  };

  const renderSingUpForm = () => {
    return (
      <form
        onSubmit={handleSubmit(onUserSignup)}
        className="w-full max-w-md space-y-4"
      >
        {renderInputField("firstName", "text", "First Name")}
        {renderInputField("lastName", "text", "Last Name")}
        {renderInputField("username", "text", "Username")}
        {renderInputField("email", "email", "Email")}
        {renderInputField("phoneNumber", "number", "Phone Number")}
        {renderSelectField(
          "roleIds",
          getRoleOptions(),
          "Role",
          "Select Role",
          true
        )}
        {renderSelectField(
          "campusId",
          [
            { value: "vellore", label: "Vellore" },
            { value: "chennai", label: "Chennai" },
            { value: "bhopal", label: "Bhopal" },
          ],
          "Campus",
          "Select Campus",
          false
        )}
        {renderInputField("password", "password", "Password")}
        {renderInputField("confirmPassword", "password", "Confirm Password")}
        <button
          type="submit"
          disabled={!isValid || Object.keys(touchedFields).length === 0}
          className={`w-full p-2 mt-4 text-white rounded ${
            isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400"
          }`}
        >
          Sign Up
        </button>
      </form>
    );
  };

  return (
    <div className="flex flex-row items-center justify-between h-screen bg-gray-100 gap-5 w-full px-8">
      <div className="flex flex-col items-center justify-center w-[90%] h-full rounded-lg shadow-md">
        <AppLogoIcon className="w-16 h-16 mb-4" />
        <p>Create Account</p>
        {renderSingUpForm()}
      </div>
      <div className="justify-self-end">
        <WelcomeIcon />
      </div>
    </div>
  );
}

export default Signup;
