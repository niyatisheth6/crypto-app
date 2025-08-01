import { MailIcon } from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function EmailVerificationModal({ open, onClose, email,isPendingEmailVerification, onResendClick , verifyLink}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md text-center py-8 px-6 rounded-2xl bg-white">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-violet-600 p-3 rounded-full">
            <MailIcon className="text-white w-6 h-6" />
          </div>
          <h2 className="text-lg font-semibold text-black">
            Email Verification
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            We have sent you an email verification to <br />
            <span className="font-semibold text-black">{email}</span>. <br />
            If you didn’t receive it, click the button below.
          </p>
          <Button
            disabled={isPendingEmailVerification}
            className="bg-gray-100 w-full py-5 text-sm font-medium rounded-xl text-black hover:bg-gray-200"
            onClick={onResendClick}
          >
            Re-Send Email
          </Button>
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
