import { useFormik } from "formik"

import { loginValidationSchema } from "@/validation/validation"

export const useLoginForm = (action) => {
  return useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: loginValidationSchema,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: (values) => {
      const loginValue = {
        email:values.email,
        password:values.password
      }
      action(loginValue)
    },
  })
}
