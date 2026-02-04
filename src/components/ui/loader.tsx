import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full space-y-4">
      <Loader2 className="h-12 w-12 animate-spin text-[#C2998F] opacity-80" />
      
      <p className="text-sm font-medium text-zinc-500 animate-pulse">
        Please wait...
      </p>
    </div>
  );
}