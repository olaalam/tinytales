"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();

    const checkAuth = () => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
        setLoading(false);
    };

    useEffect(() => {
        checkAuth();
        window.addEventListener("storage", checkAuth);
        return () => window.removeEventListener("storage", checkAuth);
    }, [pathname]);

    const isPublicPage = pathname === "/product-details";
    
    const showLayout = isLoggedIn || isPublicPage;

    if (loading) return <>{children}</>;

    return (
        <>
            {showLayout && <Navbar />}
            <main className="min-h-screen">{children}</main>
            {showLayout && <Footer />}
        </>
    );
}