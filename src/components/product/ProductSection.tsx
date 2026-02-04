// src/components/product/ProductSection.tsx
"use client";
import { useEffect, useState } from "react";
import { Plus, Minus, ShoppingBag, Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductSection() {
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  // images array
  const productImages = [
    "/main.png",
    "/Frame1.png",
    "/Frame2.png",
    "/Frame3.png",
  ];


  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // functions to navigate images
  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);


  return (
    <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

      {/* 1.gallery left */}
      <div className="space-y-6">
        <div className="relative aspect-square bg-[#F3F3F3] rounded-[40px] overflow-hidden flex items-center justify-center p-12">

          {/* upper dashes (Progress Indicators) */}
          <div className="absolute top-6 left-0 right-0 flex justify-center gap-2 px-10 z-10">
            {productImages.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${idx === activeImageIndex ? "bg-white" : "bg-white/30"
                  }`}
              />
            ))}
          </div>

          {/* main image*/}
          <img
            src={productImages[activeImageIndex]}
            className="max-h-full object-contain transition-all duration-500 transform scale-105"
            alt="Main Product"
          />

          {/* arrows */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#C2998F]/20 hover:bg-[#C2998F]/40 rounded-full flex items-center justify-center transition-colors text-[#C2998F]"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* (Thumbnails) */}
        <div className="grid grid-cols-3 gap-4">
          {productImages.slice(1).map((img, idx) => {
            const actualIndex = idx + 1;
            const isLast = idx === 2;

            return (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(actualIndex)}
                className={`relative aspect-square bg-[#F3F3F3] rounded-3xl p-4 cursor-pointer border-2 transition-all overflow-hidden ${activeImageIndex === actualIndex ? "border-[#C2998F]" : "border-transparent"
                  }`}
              >
                <img src={img} className="w-full h-full object-contain" alt={`Thumbnail ${actualIndex}`} />
                {isLast && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold">
                    +2
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. details right*/}
      <div className="flex flex-col space-y-8">
        {/* Title & Icons*/}
        <div className="relative">
          <div className="flex justify-between items-start">
            <span className="bg-white text-[#C2998F] px-5 py-2 rounded-full text-sm border border-[#C2998F]/20 shadow-sm">
              T-Shirt
            </span>
            <div className="flex gap-2">
              <button className="p-2.5 border border-zinc-100 rounded-xl hover:bg-zinc-50 transition-colors">
                <Plus size={20} className="text-primary" />
              </button>
              <button className="p-2.5 border border-zinc-100 rounded-xl hover:bg-zinc-50 transition-colors">
                <Heart size={20} className="text-primary" />
              </button>
            </div>
          </div>

          <h1 className="text-3xl font-medium text-zinc-800 mt-6 leading-snug">
            {product?.name || "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue"}
          </h1>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-bold text-zinc-900">$300.00</span>
            <span className="text-lg text-zinc-300 line-through decoration-zinc-300">$360.00</span>
          </div>
          <p className="text-zinc-400 mt-2 text-xs font-medium">This price is exclusive of taxes.</p>

          <p className="text-zinc-600 mt-6 text-[14px] leading-relaxed max-w-lg">
            Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy<br />
            Lorem ipsum dolor sit amet, diam nonummy
          </p>
        </div>

        <hr className="border-zinc-100" />

        {/*choices for product */}
        <div className="flex flex-col gap-6">
          <div className="relative group max-w-xs">
            <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] font-bold text-zinc-400 uppercase z-10">Type</label>
            <select className="w-full bg-white border border-zinc-200 rounded-2xl p-4 text-sm font-semibold outline-none appearance-none cursor-pointer hover:border-[#C2998F]/50 transition-colors">
              <option>Cotton</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
              <ChevronRight size={18} className="rotate-90" />
            </div>
          </div>

          <div className="relative group max-w-xs">
            <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] font-bold text-zinc-400 uppercase z-10">Size</label>
            <select className="w-full bg-white border border-zinc-200 rounded-2xl p-4 text-sm font-semibold outline-none appearance-none cursor-pointer hover:border-[#C2998F]/50 transition-colors">
              <option>2XL</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
              <ChevronRight size={18} className="rotate-90" />
            </div>
          </div>
        </div>

        {/* colors*/}
        <div className="space-y-4">
          <p className="text-lg font-semibold text-zinc-900">Colors</p>
          <div className="flex gap-4 items-center">
            {["#FF0000", "#D0E1F9", "#8E7D4F", "#789CCE", "#4B4B4B"].map((c, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <button
                  className={`w-12 h-12 rounded-full border-[1.5px] transition-all flex items-center justify-center ${i === 1 ? 'border-zinc-900 p-1' : 'border-transparent shadow-sm'}`}
                >
                  <div className="w-full h-full rounded-full" style={{ backgroundColor: c }} />
                </button>
                {i === 1 && <span className="text-[10px] font-bold text-zinc-500 uppercase">Blue</span>}
              </div>
            ))}
          </div>
        </div>

        {/* quantity & add to cart */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <p className="text-xl font-semibold text-zinc-900">Quantity</p>
            <span className="text-zinc-400 text-sm font-medium">($300.00 for Piece)</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center justify-between w-full lg:w-auto gap-6">
              <div className="flex items-center bg-[#F3F4F6]/50 rounded-2xl p-1.5 border border-zinc-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:bg-zinc-50 transition-colors text-zinc-400"
                >
                  <Minus size={20} />
                </button>
                <span className="font-bold text-2xl px-8 text-zinc-700">
                  {quantity.toString().padStart(2, '0')}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:bg-zinc-50 transition-colors text-zinc-400"
                >
                  <Plus size={20} />
                </button>
              </div>

              <div className="text-2xl font-bold text-zinc-900 lg:mr-auto">
                ${(300 * quantity).toFixed(2)}
              </div>
            </div>

            <button className="bg-[#C2998F]/70 text-white w-full lg:w-auto px-12 py-5 rounded-[20px] font-bold flex items-center justify-center gap-3 hover:bg-[#C2998F] transition-all min-w-[200px]">
              Add To Cart <ShoppingBag size={20} className="opacity-80" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}