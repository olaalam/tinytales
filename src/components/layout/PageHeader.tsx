// src/components/layout/PageHeader.tsx
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface PageHeaderProps {
    title: string;
    paths: { name: string; href: string; onClick?: () => void }[];
}

export default function PageHeader({ title, paths }: PageHeaderProps) {
    return (
        <>
            <div className="relative w-full bg-[#f8f9fa] h-[200px] overflow-hidden border-b border-zinc-100 flex flex-col items-center justify-between py-10">

                {/* 1. background Image  */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div
                        className="w-full h-full opacity-10"
                        style={{
                            backgroundImage: `url('/Details.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: 'scale(1.5)',
                        }}
                    />
                </div>
                {/* 2. Watermark */}
                <div className="absolute w-full md:w-[628px] h-[120px] left-0 md:left-[450px] top-[50px] inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none z-10 ">
                    <h1 className="text-[1.5rem] md:text-[3rem] font-black uppercase tracking-[0.5rem] md:tracking-[1.5rem] whitespace-nowrap text-center w-full">
                        {title}
                    </h1>
                </div>

                {/* 3.main title*/}
                <div className="relative z-20 flex flex-col items-center justify-center flex-grow pt-10">
                    <h2 className="text-4xl font-bold text-[#1a1a1a] tracking-tight">
                        {title}
                    </h2>
                </div>

            </div>
            {/* 4. links */}
            <nav className="relative z-20 flex mx-30 items-center gap-2 !bg-[#ECECEC66] bg-opacity-40 backdrop-blur-md px-8 py-3 rounded-[16px] shadow-sm border border-zinc-50 my-4">
                {paths.map((path, index) => {
                    const isLast = index === paths.length - 1;
                    return (
                        <div key={index} className="flex items-center gap-2">
                            <Link
                                href={path.href}
                                onClick={(e) => {
                                    if (path.onClick) {
                                        e.preventDefault();
                                        path.onClick();
                                    }
                                }}
                                className={`text-sm font-bold transition-all duration-200 ${isLast
                                    ? "text-primary/40 cursor-default"
                                    : "text-zinc-900 hover:text-primary"
                                    }`}
                            >
                                {path.name}
                            </Link>
                            {!isLast && (
                                <ChevronRight className="w-4 h-4 text-zinc-300" strokeWidth={4} />
                            )}
                        </div>
                    );
                })}
            </nav>


        </>

    );
}