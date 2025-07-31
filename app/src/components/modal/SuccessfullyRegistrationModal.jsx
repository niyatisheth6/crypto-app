import { CheckCircle } from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function SuccessfullyRegistrationModal({ open, onClose }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm text-center p-8 rounded-xl">
        <CheckCircle className="mx-auto h-12 w-12 text-green-600 mb-4" />
        <h2 className="text-lg font-semibold">Successfully Registration</h2>
        <p className="text-sm text-muted-foreground mt-1 mb-4">
          Hurray! You have successfully created your account. Enter the app to
          explore all its features.
        </p>
        <button
          onClick={onClose}
          className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-md w-full"
        >
          Enter the App
        </button>
      </DialogContent>
    </Dialog>
  );
}
