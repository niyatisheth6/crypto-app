import { useFormik } from "formik";

import { resetPasswordValidationSchema } from "@/validation/validation";

export const useResetPasswordForm = () => {
  return useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: (values) => {
        console.log("Reset password for:", values);
        // trigger forgot password API here
      },
  });
};
