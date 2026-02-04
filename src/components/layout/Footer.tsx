// src/components/layout/Footer.tsx
import { Facebook, Twitter, Instagram, Linkedin, Send, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#4a3f35] text-white pt-10 md:pt-16 pb-8 overflow-hidden">
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
                style={{ backgroundImage: `url('/Footer.png')` }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-12">

                    {/* Column 1: Logo & Description */}
                    <div className="col-span-2 lg:col-span-1 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <img src="/Logo.png" alt="Tinytales" className="h-10 md:h-12 w-auto" />
                        <p className="text-xs md:text-sm leading-relaxed opacity-80 max-w-sm">
                            Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae ipsam in eos qui
                            consequatur ab. Soluta dolor quae ipsam in eos quconsequatur ab maxime.
                        </p>
                    </div>

                    {/* Column 2: Let Us Help */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">Let Us Help</h4>
                        <ul className="space-y-3 md:space-y-4 text-xs md:text-sm opacity-80 font-medium">
                            <li><Link href="/account" className="hover:text-primary transition-colors">My Account</Link></li>
                            <li><Link href="/faqs" className="hover:text-primary transition-colors">FAQs</Link></li>
                            <li><Link href="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
                            <li><Link href="/products" className="hover:text-primary transition-colors">All Products</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Policies */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">Policies</h4>
                        <ul className="space-y-3 md:space-y-4 text-xs md:text-sm opacity-80 font-medium">
                            <li><Link href="/refund" className="hover:text-primary transition-colors">Refund Policy</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/cancellation" className="hover:text-primary transition-colors">Cancellation Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms and Conditions</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter & Social */}
                    <div className="col-span-2 lg:col-span-1 space-y-6 flex flex-col items-center lg:items-start w-full">
                        <div className="w-full">
                            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-center lg:text-left">Send Email</h4>
                            <div className="relative w-full max-w-md mx-auto lg:mx-0">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-white text-black py-3 px-4 rounded-xl outline-none text-sm"
                                />
                                <button className="absolute right-1 top-1 bottom-1 bg-[#c2998f] hover:bg-[#b0887e] text-white px-5 rounded-lg transition-all text-xs font-bold">
                                    Send
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center lg:items-start">
                            <h5 className="text-sm font-bold mb-4">Follow Us</h5>
                            <div className="flex gap-4">
                                <Link href="#" className="hover:scale-110 transition-transform"><Facebook size={18} /></Link>
                                <Link href="#" className="hover:scale-110 transition-transform"><Twitter size={18} /></Link>
                                <Link href="#" className="hover:scale-110 transition-transform"><Instagram size={18} /></Link>
                                <Link href="#" className="hover:scale-110 transition-transform"><Linkedin size={18} /></Link>
                                <Link href="https://wa.me/yournumber" className="hover:scale-110 transition-transform">
                                    <MessageCircle size={18} />
                                </Link>
                                <Link href="https://t.me/yourusername" className="hover:scale-110 transition-transform">
                                    <Send size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Area */}
                <div className="mt-10 md:mt-16 pt-8 border-t border-white/10 text-center text-[10px] md:text-xs opacity-50">
                    <p>© 2026 Tinytales. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}