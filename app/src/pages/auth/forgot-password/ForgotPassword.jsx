import { useForgotPasswordForm } from "@/hooks/useForgotPasswordForm";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { ForgotPasswordApi } from "@/shared/api";
import { toast } from "react-toastify";
import { useState } from "react";
import SuccessfullySentModal from "@/components/modal/SuccessfullySentModal";

export default function ForgotPassword() {
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [verifyLink, setVerifyLink] = useState("");
  const [email, setEmail] = useState("");
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => ForgotPasswordApi(data),
    onSuccess: (res) => {
      setIsSuccessModal(true);
      const url = res.data.message.match(
        /https:\/\/ethereal\.email\/[^\s]+/
      )[0];
      setVerifyLink(url);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  const formik = useForgotPasswordForm(mutate, setEmail);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-muted px-4">
        <Card className="w-full max-w-sm rounded-2xl shadow-xl">
          <form onSubmit={formik.handleSubmit}>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-xl">Forgot Password</CardTitle>
              </div>
              <CardDescription>
                Enter your email address for which account you want to reset
                your password.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
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
                  <p className="text-sm text-red-500 mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
            </CardContent>

            <CardFooter>
              <Button disabled={isPending} type="submit" className="w-full">
                Reset Password
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
      {isSuccessModal && (
        <SuccessfullySentModal
          open={isSuccessModal}
          onClose={() => setIsSuccessModal(false)}
          email={email}
          verifyLink={verifyLink}
        />
      )}
    </>
  );
}
