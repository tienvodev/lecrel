"use client";

import type React from "react";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Shield, User } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type SignupStep = "email" | "otp" | "credentials";

type SignupFormProps = React.ComponentPropsWithoutRef<"div">;

export function SignupForm({ className, ...props }: SignupFormProps) {
  const [currentStep, setCurrentStep] = useState<SignupStep>("email");
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
    setCurrentStep("credentials");
  };

  const handleCredentialsSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate account creation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    // Redirect to dashboard or login
    console.log("Account created successfully!");
  };

  const goBack = () => {
    if (currentStep === "otp") {
      setCurrentStep("email");
    } else if (currentStep === "credentials") {
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
          <h1 className="text-2xl font-bold">Create your account</h1>
        </div>
        <p className="text-balance text-sm text-muted-foreground">
          {currentStep === "email" && "Enter your email to get started"}
          {currentStep === "otp" &&
            "Enter the verification code sent to your email"}
          {currentStep === "credentials" && "Set up your username and password"}
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
            currentStep === "otp" || currentStep === "credentials"
              ? "bg-primary"
              : "bg-muted"
          )}
        />
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
            currentStep === "otp"
              ? "bg-primary text-primary-foreground"
              : currentStep === "credentials"
              ? "bg-muted text-muted-foreground"
              : "bg-muted text-muted-foreground"
          )}
        >
          <Shield className="h-4 w-4" />
        </div>
        <div
          className={cn(
            "h-0.5 w-8",
            currentStep === "credentials" ? "bg-primary" : "bg-muted"
          )}
        />
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
            currentStep === "credentials"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          )}
        >
          <User className="h-4 w-4" />
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
            {isLoading ? "Sending code..." : "Send verification code"}
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

      {/* Credentials Step */}
      {currentStep === "credentials" && (
        <form onSubmit={handleCredentialsSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="johndoe" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a strong password"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>
      )}

      {/* Footer */}
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a href="/login" className="underline underline-offset-4">
          Sign in
        </a>
      </div>
    </div>
  );
}
