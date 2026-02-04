// src/components/product/SimilarItems.tsx
"use client";
import { useState, useEffect } from 'react';
import { Star, Heart, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

export default function SimilarItems() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const products = [
        { id: 1, name: "J.VER Women's Dress Shirts Solid Long Sleeve...", price: 900, category: "Dresses", rating: 4.5, reviews: 2910, discount: null, img: "/img1.png" },
        { id: 2, name: "J.VER Women's Dress Shirts Solid Long Sleeve...", price: 900, oldPrice: 1300, category: "Dresses", rating: 4.5, reviews: 2910, discount: "25% OFF", img: "/img2.png" },
        { id: 3, name: "J.VER Women's Dress Shirts Solid Long Sleeve...", price: 900, category: "Dresses", rating: 4.5, reviews: 2910, discount: null, img: "/img3.png" },
        { id: 4, name: "J.VER Women's Dress Shirts Solid Long Sleeve...", price: 900, oldPrice: 1300, category: "Dresses", rating: 4.5, reviews: 2910, discount: "25% OFF", img: "/img4.png" },
        { id: 5, name: "New Arrival Stylish Shirt Long Sleeve...", price: 850, category: "Shirts", rating: 4.8, reviews: 1200, discount: null, img: "/img1.png" },
        { id: 6, name: "New Arrival Stylish Shirt Long Sleeve...", price: 850, category: "Shirts", rating: 4.8, reviews: 1200, discount: null, img: "/img2.png" },
    ];

    const itemsToShow = 4;
    const maxIndex = products.length - itemsToShow;

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 mb-20 overflow-hidden">
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-zinc-800 flex flex-col">
                    Similar Items
                    <span className="h-1.5 w-12 bg-[#C2998F] mt-2 rounded-full" />
                </h2>
            </div>

            {/* cards*/}
            <div className="relative">
                <div
                    className="flex transition-transform duration-700 ease-in-out gap-6"

                    style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                >
                    {products.map((item) => (
                        <div key={item.id} className="min-w-[calc(100%-24px)] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] group">
                            {/* image card */}
                            <div className="relative aspect-[4/5] bg-[#F8F8F8] rounded-[32px] p-6 mb-4 overflow-hidden border border-transparent transition-all">
                                {item.discount && (
                                    <span className="absolute top-4 left-4 bg-white text-zinc-300 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm z-20">
                                        {item.discount}
                                    </span>
                                )}

                                {/* icons over image */}
                                <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-zinc-400 hover:text-[#C2998F] transition-colors">
                                        <ShoppingBag size={18} />
                                    </button>
                                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-zinc-400 hover:text-red-500 transition-colors">
                                        <Heart size={18} />
                                    </button>
                                </div>

                                <img src={item.img} className="w-full h-full object-contain mix-blend-multiply relative z-10" alt={item.name} />
                            </div>

                            {/* product details*/}
                            <div className="space-y-1.5 px-2">
                                <div className="flex justify-between items-center text-[11px] font-bold text-zinc-300 uppercase">
                                    <span>{item.category}</span>
                                    <div className="flex items-center gap-1 text-zinc-800">
                                        <Star size={12} className="fill-[#C2998F] text-[#C2998F]" />
                                        <span>{item.rating} <span className="text-zinc-300">({item.reviews})</span></span>
                                    </div>
                                </div>
                                <h3 className="text-sm font-bold text-zinc-800 leading-snug line-clamp-2 min-h-[40px]">
                                    {item.name}
                                </h3>
                                <div className="flex items-center justify-between pt-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold text-zinc-900">AED {item.price}</span>
                                        {item.oldPrice && <span className="text-sm text-zinc-300 line-through">AED {item.oldPrice}</span>}
                                    </div>
                                    <div className="flex -space-x-1">
                                        <div className="w-4 h-4 rounded-full border-2 border-white bg-[#C2998F]" />
                                        <div className="w-4 h-4 rounded-full border-2 border-white bg-zinc-800" />
                                        <div className="w-4 h-4 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-[8px] font-bold text-zinc-400">+2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-12">
                <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-50 transition-all shadow-sm active:scale-95"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full bg-[#C2998F]/50 flex items-center justify-center text-white hover:bg-[#C2998F] transition-all shadow-md active:scale-95"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
}