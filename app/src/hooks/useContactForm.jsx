import { contactFormValidationSchema } from "@/validation/validation"
import { useFormik } from "formik"


export const useContactForm = () => {
  return useFormik({
    initialValues: {
        name: "",
        surname: "",
        email: "",
        message: "",
        terms: false
      },
    validationSchema: contactFormValidationSchema,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: (values) => {
     console.log(values)
    },
  })
}
