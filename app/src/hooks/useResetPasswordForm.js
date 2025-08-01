import { useFormik } from "formik";

import { resetPasswordValidationSchema } from "@/validation/validation";
import { useParams } from "react-router-dom";

export const useResetPasswordForm = (action) => {
  const { token } = useParams();

  return useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: (values) => {
      const resetPasswordValues = {
        password : values.password,
        token: token
      }
      action(resetPasswordValues)
      },
  });
};
