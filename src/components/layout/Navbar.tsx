// src/components/layout/Navbar.tsx
"use client";
import Link from "next/link";
import { ShoppingBag, Bell, Heart, User, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
export default function Navbar() {
    const pathname = usePathname();
    const navLinks = [
        { name: 'Home', href: '/dashboard' },
        { name: 'Our Category', href: '/category' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQs', href: '/faqs' },
    ];
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white px-4 py-3 md:px-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img src="/Logo.png" alt="Tinytales" className="h-[51px] w-[65.95px]" />
                </Link>
                {/* Desktop Links */}
                <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-colors duration-200 cursor-pointer ${isActive
                                        ? "text-primary font-bold"
                                        : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Icons Area */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 border-r pr-4 max-md:hidden">
                        <Button variant="ghost" size="icon"><ShoppingBag className="h-5 w-5" /></Button>
                        <Button variant="ghost" size="icon" className="border border-green-500 rounded-sm text-green-500"><Bell className="h-5 w-5" /></Button>
                        <Button variant="ghost" size="icon"><Heart className="h-5 w-5" /></Button>
                    </div>

                    <div className="flex items-center gap-1 text-sm font-medium cursor-pointer">
                        <span>EN</span> <ChevronDown className="h-4 w-4" />
                    </div>

                    <div className="flex items-center gap-1 cursor-pointer max-md:hidden">
                        <User className="h-5 w-5" /> <ChevronDown className="h-4 w-4" />
                    </div>

                    {/* Mobile Menu Button */}
                    <Button variant="ghost" size="icon" className="lg:hidden">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </nav>
    );
}