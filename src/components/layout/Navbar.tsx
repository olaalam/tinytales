"use client";
import { useState } from "react"; 
import Link from "next/link";
import { ShoppingBag, Bell, Heart, User, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

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

                {/* Desktop Links (Hidden on Mobile) */}
                <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-colors duration-200 cursor-pointer ${isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
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

                    {/* Mobile Menu (Sheet UI) */}
                    <div className="lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px]">
                                <SheetHeader>
                                    <SheetTitle className="text-left">Tinytales</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 mt-10">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-lg font-medium ${pathname === link.href ? "text-primary font-bold" : "text-zinc-600"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <hr />
                                    {/* Icons inside mobile menu */}
                                    <div className="flex items-center gap-6">
                                        <ShoppingBag className="h-6 w-6 text-zinc-600" />
                                        <Heart className="h-6 w-6 text-zinc-600" />
                                        <div className="relative">
                                            <Bell className="h-6 w-6 text-green-500" />
                                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-zinc-800 text-white rounded-xl py-6">
                                        <User className="mr-2 h-5 w-5" /> Profile
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}