// src/components/product/ProductReviews.tsx
import { Star, MessageSquarePlus } from "lucide-react";

export default function ProductReviews() {
    const ratings = [
        { stars: 5, percentage: 67 },
        { stars: 4, percentage: 15 },
        { stars: 3, percentage: 6 },
        { stars: 2, percentage: 3 },
        { stars: 1, percentage: 9 },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-10 py-10 md:py-16 border-t border-zinc-100 mt-10">
            {/* Rating Summary*/}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-10 md:mb-16 gap-8 lg:gap-10">

                {/*1.number of rating  */}
                <div className="space-y-4 text-center lg:text-left">
                    <h2 className="text-xl md:text-2xl font-bold text-zinc-800 flex flex-col items-center lg:items-start">
                        Rating & Reviews
                        <span className="h-1 w-12 bg-primary mt-2 rounded-full" />
                    </h2>
                    <div className="flex items-baseline justify-center lg:justify-start gap-2">
                        <span className="text-6xl md:text-[80px] font-bold text-zinc-900 leading-none">4,5</span>
                        <span className="text-xl md:text-3xl text-zinc-200">/5</span>
                    </div>
                </div>

                {/*2. rating*/}
                <div className="w-full max-w-md space-y-3 px-2 md:px-0">
                    {ratings.map((rating, i) => (
                        <div key={i} className="flex items-center gap-4 text-[12px] md:text-[13px] font-bold text-zinc-400">
                            <div className="flex items-center gap-1 w-6">
                                {rating.stars} <Star size={12} className="fill-zinc-300 text-zinc-300" />
                            </div>
                            <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                                <div className="h-full bg-primary/40 rounded-full transition-all duration-500" style={{ width: `${rating.percentage}%` }} />
                            </div>
                            <div className="w-10 text-right text-zinc-500">%{rating.percentage}</div>
                        </div>
                    ))}
                </div>

                {/*3. Add comment*/}
                <div className=" sm:hidden md:flex flex-col items-center lg:items-end space-y-4 w-full lg:w-auto border-t lg:border-t-0 pt-6 lg:pt-0 border-zinc-50">
                    <div className="text-center lg:text-right">
                        <p className="text-zinc-400 text-xs md:text-sm font-medium">Total Reviews</p>
                        <p className="text-4xl md:text-[52px] font-bold text-zinc-900 tracking-tighter leading-none">3.0K</p>
                    </div>
                    <button className="bg-primary/60 text-white w-full md:w-auto px-8 py-4 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-primary transition-all">
                        Add Comment <MessageSquarePlus size={18} />
                    </button>
                </div>
            </div>

            {/* Comments Section */}
            <div className="space-y-10 md:space-y-12">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="border-b border-zinc-50 pb-8 md:pb-12 last:border-0">

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                            <div className="flex items-center gap-3">
                                <span className="text-base md:text-lg font-bold text-zinc-800">Alex Daewn</span>
                                <div className="flex gap-0.5 text-primary">
                                    {[1, 2, 3, 4].map(s => <Star key={s} size={14} className="fill-current" />)}
                                    <Star size={14} className="text-zinc-200" />
                                </div>
                            </div>
                            <span className="text-[10px] md:text-xs font-bold text-zinc-400 tracking-widest uppercase">4 months ago</span>
                        </div>

                        <p className="text-zinc-600 text-sm leading-relaxed md:leading-[1.8] max-w-5xl">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                        </p>
                    </div>
                ))}


                <div className="text-center pt-6">
                    <button className="bg-[#F9F9F9] text-primary w-full md:w-auto px-12 py-4 rounded-2xl font-bold text-sm hover:bg-zinc-100 transition-colors border border-zinc-50">
                        View More Comments
                    </button>
                </div>
            </div>
        </section>
    );
}