import React from "react";

import { useResetPasswordForm } from "@/hooks/useResetPasswordForm";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const ResetPassword = () => {
  const formik = useResetPasswordForm();

  const { handleSubmit, handleChange, values, errors, touched } = formik;

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 rounded-xl bg-white p-8 shadow"
      >
        <h2 className="text-2xl font-semibold">Reset Password</h2>
        <p className="text-sm text-muted-foreground">
          Enter your new password.
        </p>

        <div className="space-y-2">
          <Label htmlFor="password">New Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="••••••••"
          />
          {touched.password && errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Repeat New Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <p className="text-sm text-red-500">{errors.confirmPassword}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
};
