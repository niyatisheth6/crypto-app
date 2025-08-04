import { FormField } from "@/components/form-field/FormField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactForm() {
  const formik = useContactForm();
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white p-6 rounded-xl shadow-sm w-full "
    >
      <p className="text-sm mb-4">
        You will receive response within 24 hours of time of submit.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          id="name"
          label="Name"
          placeholder="James"
          value={formik.values.name}
          error={formik.errors.name}
          touched={formik.touched.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormField
          id="surname"
          label="Surname"
          placeholder="Arthur"
          value={formik.values.surname}
          error={formik.errors.surname}
          touched={formik.touched.surname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="mt-4">
        <FormField
          id="email"
          label="Email"
          placeholder="name@mail.com"
          value={formik.values.email}
          error={formik.errors.email}
          touched={formik.touched.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-sm text-red-500 mt-1">{formik.errors.message}</p>
        )}
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <Checkbox
          id="terms"
          checked={formik.values.terms}
          onCheckedChange={(checked) => formik.setFieldValue("terms", checked)}
        />
        <Label htmlFor="terms" className="text-sm">
          I agree with{" "}
          <span className="text-purple-600">Terms & Conditions</span>.
        </Label>
      </div>
      {formik.touched.terms && formik.errors.terms && (
        <p className="text-sm text-red-500 mt-1">{formik.errors.terms}</p>
      )}
      <Button type="submit" className="w-full mt-4">
        Send a Message
      </Button>
      <Button type="button" variant="secondary" className="w-full mt-2">
        Book a Meeting
      </Button>
    </form>
  );
}
