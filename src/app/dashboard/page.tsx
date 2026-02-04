"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/use-api";
import Cookies from 'js-cookie';
import { LogOut, ArrowRight, User } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link"; 

export default function DashboardPage() {
  const { get, post, isLoading } = useApi();
  const router = useRouter();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/register");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await get("/auth/user-data");
        setUserName(res.data.name);
      } catch (err: any) {
        if (err.response?.status === 401) handleLogoutLocal();
      }
    };
    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    try {
      await post("/auth/logout", {});
    } finally {
      handleLogoutLocal();
    }
  };

  const handleLogoutLocal = () => {
    localStorage.removeItem("token");
    Cookies.remove("token");
    router.push("/register");
  };

  if (isLoading) return <div className="p-10 text-center text-[#C2998F]">Loading...</div>;

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Dashboard"
        paths={[{ name: "Home", href: "/" }, { name: "Dashboard", href: "#" }]}
      />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-in fade-in zoom-in duration-500 bg-[#f8f9fa] rounded-[32px] p-10 border border-zinc-100 text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-[#C2998F]/20 rounded-full flex items-center justify-center text-[#C2998F] mb-6">
            <User size={40} />
          </div>
          <h1 className="text-3xl font-bold text-zinc-800">
            Welcome back, <span className="text-[#C2998F]">{userName || "User"}</span>
          </h1>
          <p className="text-zinc-500 mt-2 mb-10">Manage your account and explore our latest products.</p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
           
            <Link 
              href="/product-details" 
              className="flex-1 bg-zinc-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all"
            >
              Go to Product Details <ArrowRight size={18} />
            </Link>
            
            <button
              onClick={handleLogout}
              className="flex-1 border-2 border-zinc-100 text-zinc-500 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 hover:text-red-500 transition-all"
            >
              Logout <LogOut size={18} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}