"use client";

import type React from "react";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Shield, Lock } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type ForgotPasswordStep = "email" | "otp" | "reset";

interface ForgotPasswordFormProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export function ForgotPasswordForm({
  className,
  ...props
}: ForgotPasswordFormProps) {
  const [currentStep, setCurrentStep] = useState<ForgotPasswordStep>("email");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call to send OTP
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setCurrentStep("otp");
  };

  const handleOtpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate OTP verification
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setCurrentStep("reset");
  };

  const handlePasswordResetSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate password reset
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    // Redirect to login with success message
    console.log("Password reset successfully!");
  };

  const goBack = () => {
    if (currentStep === "otp") {
      setCurrentStep("email");
    } else if (currentStep === "reset") {
      setCurrentStep("otp");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="flex items-center gap-2">
          {currentStep !== "email" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={goBack}
              className="p-1 h-8 w-8"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          )}
          <h1 className="text-2xl font-bold">Reset your password</h1>
        </div>
        <p className="text-balance text-sm text-muted-foreground">
          {currentStep === "email" &&
            "Enter your email to receive a reset code"}
          {currentStep === "otp" &&
            "Enter the verification code sent to your email"}
          {currentStep === "reset" && "Create a new password for your account"}
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2">
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
            currentStep === "email"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          )}
        >
          <Mail className="h-4 w-4" />
        </div>
        <div
          className={cn(
            "h-0.5 w-8",
            currentStep === "otp" || currentStep === "reset"
              ? "bg-primary"
              : "bg-muted"
          )}
        />
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
            currentStep === "otp"
              ? "bg-primary text-primary-foreground"
              : currentStep === "reset"
              ? "bg-muted text-muted-foreground"
              : "bg-muted text-muted-foreground"
          )}
        >
          <Shield className="h-4 w-4" />
        </div>
        <div
          className={cn(
            "h-0.5 w-8",
            currentStep === "reset" ? "bg-primary" : "bg-muted"
          )}
        />
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
            currentStep === "reset"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          )}
        >
          <Lock className="h-4 w-4" />
        </div>
      </div>

      {/* Email Step */}
      {currentStep === "email" && (
        <form onSubmit={handleEmailSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending code..." : "Send reset code"}
          </Button>
        </form>
      )}

      {/* OTP Step */}
      {currentStep === "otp" && (
        <form onSubmit={handleOtpSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="otp">Verification code</Label>
            <div className="flex justify-center">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Code sent to {email}
            </p>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Verifying..." : "Verify code"}
          </Button>
          <Button type="button" variant="ghost" className="w-full text-sm">
            Resend code
          </Button>
        </form>
      )}

      {/* Password Reset Step */}
      {currentStep === "reset" && (
        <form onSubmit={handlePasswordResetSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="newPassword">New password</Label>
            <Input
              id="newPassword"
              type="password"
              placeholder="Create a strong password"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmNewPassword">Confirm new password</Label>
            <Input
              id="confirmNewPassword"
              type="password"
              placeholder="Confirm your new password"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Resetting password..." : "Reset password"}
          </Button>
        </form>
      )}

      {/* Footer */}
      <div className="text-center text-sm">
        Remember your password?{" "}
        <a href="/login" className="underline underline-offset-4">
          Back to login
        </a>
      </div>
    </div>
  );
}
