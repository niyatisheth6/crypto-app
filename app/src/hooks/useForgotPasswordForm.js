import { useFormik } from "formik";

import { forgotPasswordValidationSchema } from "@/validation/validation";

export const useForgotPasswordForm = () => {
  return useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: (values) => {
      console.log("Reset password for:", values);
      // trigger forgot password API here
    },
  });
};
