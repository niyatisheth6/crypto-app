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

export default function SignUp() {
  const formik = useRegisterForm();

  return (
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
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="James"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-sm text-red-500">{formik.errors.name}</p>
                )}
              </div>
              <div>
                <Label htmlFor="surname">Surname</Label>
                <Input
                  id="surname"
                  name="surname"
                  placeholder="Arthur"
                  value={formik.values.surname}
                  onChange={formik.handleChange}
                />
                {formik.touched.surname && formik.errors.surname && (
                  <p className="text-sm text-red-500">
                    {formik.errors.surname}
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
                <p className="text-sm text-red-500">{formik.errors.password}</p>
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
              disabled={!formik.values.agree}
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
  );
}
