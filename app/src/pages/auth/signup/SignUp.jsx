import { useRegisterForm } from "@/hooks/useRegisterForm";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { EmailVarificationApi, SignUpApi } from "@/shared/api";
import { toast } from "react-toastify";
import { useState } from "react";
import EmailVerificationModal from "@/components/modal/EmailVerificationModal";

export default function SignUp() {
  const [isEmailVarification, setIsEmailVarification] = useState(false);
  const [email, setEmail] = useState("");

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => SignUpApi(data),
    onSuccess: (res) => {
      // navigate("/",{state:{email."niyu@gmail.com"}});
      // const location= useLocation()
      // const email = location.state.email
      setIsEmailVarification(true);
      EmailVerificationMutate(email);
      toast.success(res.data.data.message);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  const {
    mutate: EmailVerificationMutate,
    isLoading: isLoadingEmailVarification,
  } = useMutation({
    mutationFn: () => EmailVarificationApi({ email: email }),
    onSuccess: (res) => {
      toast.success(res.data.data.message);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  const formik = useRegisterForm(mutate, setEmail);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-muted px-4">
        <Card className="w-full max-w-md rounded-2xl shadow-xl">
          <form onSubmit={formik.handleSubmit}>
            <CardHeader>
              <CardTitle className="text-2xl">Welcome to Crypto App</CardTitle>
              <CardDescription>
                Create a free account by filling data below.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="James"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <p className="text-sm text-red-500">
                      {formik.errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">lastName</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Arthur"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p className="text-sm text-red-500">
                      {formik.errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@email.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-sm text-red-500">{formik.errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-sm text-red-500">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="repeatPassword">Repeat Password</Label>
                <Input
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  value={formik.values.repeatPassword}
                  onChange={formik.handleChange}
                />
                {formik.touched.repeatPassword &&
                  formik.errors.repeatPassword && (
                    <p className="text-sm text-red-500">
                      {formik.errors.repeatPassword}
                    </p>
                  )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agree"
                  checked={formik.values.agree}
                  onCheckedChange={(checked) =>
                    formik.setFieldValue("agree", checked)
                  }
                />
                <Label htmlFor="agree" className="text-sm">
                  I agree with{" "}
                  <a href="#" className="text-purple-600 hover:underline">
                    Terms & Conditions
                  </a>
                </Label>
              </div>
              {formik.touched.agree && formik.errors.agree && (
                <p className="text-sm text-red-500">{formik.errors.agree}</p>
              )}
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
              <Button
                type="submit"
                className="w-full"
                disabled={!formik.values.agree || isLoading}
              >
                Create Account
              </Button>
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <a href="/login" className="text-blue-600 hover:underline">
                  Log In
                </a>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
      {isEmailVarification && (
        <EmailVerificationModal
          open={isEmailVarification}
          onClose={() => setIsEmailVarification(false)}
          email={email}
          isLoadingEmailVarification={isLoadingEmailVarification}
          onResendClick={() => {
            EmailVerificationMutate(email);
          }}
        />
      )}
     
    </>
  );
}
