"use client";

import { useActionState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Mail, CheckCircle } from "lucide-react";
import {
  verifyOtpAction,
  resendOtpAction,
  type OtpState,
} from "@/app/you/signup/signup-action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface OtpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  email: string;
}

const initialOtpState: OtpState = {};

export function OtpModal({ open, onOpenChange, email }: OtpModalProps) {
  const router = useRouter();
  const [state, formAction] = useActionState(verifyOtpAction, initialOtpState);
  const [isPending, startTransition] = useTransition();
  const [isResending, startResendTransition] = useTransition();

  // Redirect on successful verification
  useEffect(() => {
    if (state.success) {
      // Close modal and redirect to login or dashboard
      onOpenChange(false);
      router.push("/you/login?verified=true");
    }
  }, [state.success, onOpenChange, router]);

  const handleResendOtp = () => {
    startResendTransition(async () => {
      const result = await resendOtpAction(email);
      if (result.success) {
        // Show success feedback (you could add a toast here)
        console.log("OTP resent successfully");
      } else {
        console.error("Failed to resend OTP:", result.error);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Verify Your Email
          </DialogTitle>
          <DialogDescription>
            We've sent a 6-digit verification code to{" "}
            <span className="font-medium">{email}</span>. Please enter it below.
          </DialogDescription>
        </DialogHeader>

        {state.success && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Email verified successfully! Redirecting...
            </AlertDescription>
          </Alert>
        )}

        {state.error && (
          <Alert variant="destructive">
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        )}

        <form action={formAction} className="space-y-4">
          <input type="hidden" name="email" value={email} />

          <div className="space-y-2">
            <Label htmlFor="otp">Verification Code</Label>
            <Input
              id="otp"
              name="otp"
              type="text"
              placeholder="000000"
              maxLength={6}
              className="text-center text-lg tracking-widest"
              disabled={isPending}
              autoComplete="one-time-code"
            />
            {state.fieldErrors?.otp && (
              <p className="text-sm text-red-600">{state.fieldErrors.otp[0]}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify Email"
              )}
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleResendOtp}
              disabled={isResending}
              className="text-muted-foreground"
            >
              {isResending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Resending...
                </>
              ) : (
                "Resend code"
              )}
            </Button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground text-center">
          The verification code will expire in 10 minutes.
        </p>
      </DialogContent>
    </Dialog>
  );
}
