import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle } from "lucide-react";

import { VarifyUserEmailApi } from "@/shared/api";
import { Card, CardContent } from "@/components/ui/card";

export default function SuccessfullyRegistration() {
  const navigate = useNavigate();
  const { token } = useParams();

  const { isLoading } = useQuery({
    queryKey: ["verify-email-token"],
    queryFn: () => VarifyUserEmailApi({ token: token }),
    enabled: !!token,
    onError: (err) => {
      toast.error(err.response.data.message);
      navigate("/sign-up");
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted px-4">
        <h2 className="text-2xl">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card>
        <CardContent className="max-w-sm text-center p-8 rounded-xl">
          <CheckCircle className="mx-auto h-12 w-12 text-green-600 mb-4" />
          <h2 className="text-lg font-semibold">Successfully Registration</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-4">
            Hurray! You have successfully created your account. Enter the app to
            explore all its features.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-md w-full"
          >
            Enter the App
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
