"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userSignupSchema } from "@/lib/validationSchema";
import { AppLogoIcon, WelcomeIcon } from "@/utils/Icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm, useWatch } from "react-hook-form";
import CustomSelect from "@/components/common/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { use, useEffect, useState } from "react";
import { getAllRoles } from "@/store/actions/roleActions";
import { getAllCampuses } from "@/store/actions/campusActions";
import {
  checkUserexistsByUsername,
  insertUser,
} from "@/store/actions/userActions";
import { useRouter } from "next/navigation";
import { showToast } from "@/store/reducers/globalReducers";
import _, { set } from "lodash";
import { setUsernameExists } from "@/store/reducers/userReducers";

function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { roles, error: roleError } = useSelector((state) => state.role);
  const { campuses, error: campusError } = useSelector((state) => state.campus);
  const {
    isUserRegistered,
    usernameExists,
    loading: userLoading,
    error: userError,
  } = useSelector((state) => state.user);

  const [checkingUsername, setCheckingUsername] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    control,
    formState: { errors: formErrors, isValid, touchedFields },
  } = useForm({ resolver: yupResolver(userSignupSchema), mode: "onChange" });

  const username = watch("userName");

  useEffect(() => {
    dispatch(getAllRoles());
    dispatch(getAllCampuses());
  }, [dispatch]);

  useEffect(() => {
    if (isUserRegistered) {
      dispatch(
        showToast({
          message: "User registered successfully!",
          title: "Success",
          type: "success",
        })
      );

      router.push("/user/login");
      return;
    }
  }, [isUserRegistered]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (username && username.length >= 6) {
        setCheckingUsername(true);
        dispatch(checkUserexistsByUsername(username));
      } else {
        setCheckingUsername(false);
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [username]);

  useEffect(() => {
    if (username && username.length >= 6 && usernameExists) {
      setError("userName", {
        type: "manual",
        message: "Username already exists. Please choose another one.",
      });
    }
    setCheckingUsername(false);
  }, [usernameExists]);

  useEffect(() => {
    let errorMessage = "";

    if (!_.isNull(userError)) {
      errorMessage = "An error occurred while processing your request.";
    } else if (!_.isNull(roleError)) {
      errorMessage = "An error occurred while fetching roles.";
    } else if (!_.isNull(campusError)) {
      errorMessage = "An error occurred while fetching campuses.";
    }

    if (!_.isEmpty(errorMessage)) {
      dispatch(
        showToast({
          message: errorMessage,
          title: "Validation Error",
          type: "error",
        })
      );
    }
  }, [userError, roleError, campusError]);

  const onUserSignup = (data) => {
    dispatch(insertUser(data));
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
            formErrors[name] ? "border-red-500" : "border-gray-300"
          }`}
        />
        {formErrors[name] && (
          <span className="text-red-500 text-sm">
            {formErrors[name].message}
          </span>
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

        {formErrors[name] && (
          <span className="text-red-500 text-sm">
            {formErrors[name].message}
          </span>
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

  const getCampusOptions = () => {
    if (!campuses || campuses.length === 0) return [];
    return campuses
      .map((campus) => ({
        value: campus.id,
        label: campus.campusName,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  };

  const isSubmitButtonDisabled = () => {
    return (
      !isValid || Object.keys(touchedFields).length === 0 || userLoading
    );
  };

  const renderSingUpForm = () => {
    return (
      <form
        onSubmit={handleSubmit(onUserSignup)}
        className="w-full max-w-md space-y-4"
      >
        {renderInputField("firstName", "text", "First Name")}
        {renderInputField("lastName", "text", "Last Name")}
        {renderInputField("userName", "text", "Username")}
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
          getCampusOptions(),
          "Campus",
          "Select Campus",
          false
        )}
        {renderInputField("password", "password", "Password")}
        {renderInputField("confirmPassword", "password", "Confirm Password")}
        <button
          type="submit"
          disabled={isSubmitButtonDisabled()}
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
