import { useFormik } from "formik";

import { registerValidationSchema } from "@/validation/validation";

export const useRegisterForm = () => {
  return useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      repeatPassword: "",
      agree: false,
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      console.log("Form submitted!", values);
      //   action(values)
    },
  });
};
