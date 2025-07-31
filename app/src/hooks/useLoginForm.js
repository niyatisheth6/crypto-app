import { useFormik } from "formik"

import { loginValidationSchema } from "@/validation/validation"

export const useLoginForm = () => {
  return useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log("Logging in with:", values)
      // Add your login API call here
    },
  })
}
