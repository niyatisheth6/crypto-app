import { CheckCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function SuccessfullySentModal({ open, onClose, email }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-6 text-center">
        <div className="flex flex-col items-center space-y-5">
          <CheckCircle className="w-12 h-12 text-green-600" />
          <DialogHeader>
            <DialogTitle className="text-xl">Successfully Sent</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            We have sent instructions on how to reset your password to{" "}
            <span className="font-semibold text-foreground">{email}</span>.{" "}
            Please follow the instructions from the email.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
