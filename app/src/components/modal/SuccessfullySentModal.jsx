import { CheckCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function SuccessfullySentModal({
  open,
  onClose,
  email,
  verifyLink,
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md text-center py-8 px-6 rounded-2xl bg-white">
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
          <a
            href={verifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white w-full text-sm px-4 py-2 rounded-md flex items-center justify-center"
          >
            Verify Email Link
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
