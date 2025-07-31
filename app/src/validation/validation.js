import { boolean, object, ref, string } from "yup";

export const registerValidationSchema = object({
  firstName: string().required("firstName is required"),
  lastName: string().required("lastName is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  repeatPassword: string()
    .oneOf([ref("password")], "Passwords must match")
    .required("Repeat password is required"),
  agree: boolean().oneOf([true], "You must agree to the terms"),
});

export const loginValidationSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
  // remember: boolean(),
});

export const forgotPasswordValidationSchema = object({
  email: string().email("Invalid email address").required("Email is required"),
});

export const resetPasswordValidationSchema = object({
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("New Password is required"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Repeat New Password is required"),
});
