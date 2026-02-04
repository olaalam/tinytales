"use client";
import { useAuth } from "@/hooks/use-auth"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  const { login, isLoading } = useAuth(); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    await login(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="text-center text-primary text-2xl font-bold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input name="email" type="email" placeholder="email@example.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input name="password" type="password" placeholder="••••••••" required />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}