import { useFormik } from "formik";

import { forgotPasswordValidationSchema } from "@/validation/validation";

export const useForgotPasswordForm = (action, setEmail) => {
  return useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: (values) => {
      setEmail(values.email)
      action(values)
    },
  });
};
