"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/use-api";
import Cookies from 'js-cookie';
import { LogOut, ArrowRight, User, ArrowLeft } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import ProductSection from "@/components/product/ProductSection";
import ProductReviews from "@/components/product/ProductReviews";
import SimilarItems from "@/components/product/SimilarItems";

export default function DashboardPage() {
  const { get, post, isLoading } = useApi();
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [view, setView] = useState<"welcome" | "details">("welcome");

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
      {/* header*/}
      <PageHeader
        title={view === "welcome" ? "Dashboard" : "Product Details"}
        paths={view === "welcome"
          ? [{ name: "Home", href: "/" }, { name: "Dashboard", href: "#" }]
          : [
            { name: "Home", href: "/" },
            { name: "Dashboard", href: "#", onClick: () => setView("welcome") },
            { name: "Details", href: "#" }
          ]
        }
      />
      <main className="max-w-7xl mx-auto px-4 py-8">

        {/*welcome message*/}
        {view === "welcome" && (
          <div className="animate-in fade-in zoom-in duration-500 bg-[#f8f9fa] rounded-[32px] p-10 border border-zinc-100 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-[#C2998F]/20 rounded-full flex items-center justify-center text-[#C2998F] mb-6">
              <User size={40} />
            </div>
            <h1 className="text-3xl font-bold text-zinc-800">
              Welcome back, <span className="text-[#C2998F]">{userName || "User"}</span>
            </h1>
            <p className="text-zinc-500 mt-2 mb-10">Manage your account and explore our latest products.</p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <button
                onClick={() => setView("details")}
                className="flex-1 bg-zinc-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all"
              >
                Go to Product Details <ArrowRight size={18} />
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 border-2 border-zinc-100 text-zinc-500 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 hover:text-red-500 transition-all"
              >
                Logout <LogOut size={18} />
              </button>
            </div>
          </div>
        )}

        {/* product Details*/}
        {view === "details" && (
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <ProductSection />
            <ProductReviews />
            <SimilarItems />
          </div>
        )}
      </main>
    </div>
  );
}