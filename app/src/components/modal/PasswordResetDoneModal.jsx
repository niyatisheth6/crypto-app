import { useNavigate } from "react-router-dom";

import { CheckCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

export default function PasswordResetDoneModal({ open, onClose }) {
  const navigate = useNavigate();
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md text-center py-8 px-6 rounded-2xl bg-white">
        <div className="flex flex-col items-center space-y-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
          <div>
            <DialogHeader className="mb-2">
              <DialogTitle className="text-xl">Password Reset Done</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">
              Now you can access your account.
            </p>
          </div>
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white w-full max-w-xs"
            onClick={() => {
              navigate("/login");
              onClose();
            }}
          >
            Sign In
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
