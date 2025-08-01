import { useFormik } from "formik";

import { registerValidationSchema } from "@/validation/validation";

export const useRegisterForm = (action, setEmail) => {
  return useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
      agree: false,
    },
    validationSchema: registerValidationSchema,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: (values) => {
      const signUpValues = {
        firstName : values.firstName,
        lastName : values.lastName,
        email:values.email,
        password:values.password
      }
      setEmail(values.email)
      action(signUpValues)
    },
  });
};
