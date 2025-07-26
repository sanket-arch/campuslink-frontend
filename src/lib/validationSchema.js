import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string().required("Name is required"),
  password: Yup.string().required("Password is required"),
});
export const userSignupSchema = Yup.object().shape({
  userName: Yup.string()
    .required("Name is required")
    .min(6, "username must be at least 6 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
