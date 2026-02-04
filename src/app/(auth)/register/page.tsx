// src/app/(auth)/register/page.tsx
"use client";
import { useApi } from "@/hooks/use-api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Cookies from 'js-cookie';
export default function RegisterPage() {
  const { post, isLoading } = useApi();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData);

    try {
      const res = await post("/auth/register", values);
      localStorage.setItem("token", res.data.token);
      Cookies.set('token', res.data.token, { expires: 7 });
      toast.success(res.message || "Registration successful!");
      router.push("/verify");
      router.refresh();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50/50 p-4">
      <Card className="w-full max-w-md shadow-xl border-t-4 border-t-primary">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
          <p className="text-sm text-center text-muted-foreground">Enter your details to get started</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input name="name" placeholder="Full Name" required className="h-11" />
            </div>
            <div className="space-y-2">
              <Input name="email" type="email" placeholder="Email Address" required className="h-11" />
            </div>
            <div className="flex gap-2">
              <Input name="mobile_country_code" placeholder="+971" defaultValue="971" required className="w-24 h-11" />
              <Input name="mobile" placeholder="Phone Number" required className="flex-1 h-11" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input name="password" type="password" placeholder="Password" required className="h-11" />
              <Input name="password_confirmation" type="password" placeholder="Confirm" required className="h-11" />
            </div>
            <Button className="w-full h-11 text-lg font-semibold transition-all hover:scale-[1.01]" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Register"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold hover:underline decoration-2">
              Login here
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}