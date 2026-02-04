// src/app/(auth)/verify/page.tsx
"use client";
import { useApi } from "@/hooks/use-api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function VerifyPage() {
  const { post, isLoading } = useApi();
  const router = useRouter();

  const handleVerify = async (code: string) => {
    try {
      await post("/auth/verify-email", { code });
      toast.success("Account Verified Successfully");
      router.push("/dashboard");
    } catch (err) {}
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Verify Your Account</h2>
        <p className="text-muted-foreground">Enter the 6-digit code</p>
      </div>
      <InputOTP maxLength={6} onComplete={handleVerify} disabled={isLoading}>
        <InputOTPGroup>
          {[...Array(6)].map((_, i) => <InputOTPSlot key={i} index={i} />)}
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}