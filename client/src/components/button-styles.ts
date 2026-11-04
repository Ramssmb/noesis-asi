import { cn } from "@/lib/utils";

export type Variant = "primary" | "secondary" | "ghost" | "danger" | "outline" | "soft";
export type Size = "sm" | "md" | "lg" | "icon";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-brand-700 text-white shadow-sm shadow-brand-700/20 hover:bg-brand-800 active:bg-brand-900",
  secondary: "bg-ink text-white shadow-sm hover:bg-slate-800",
  outline: "border border-slate-300 bg-white text-slate-700 shadow-sm hover:border-brand-300 hover:bg-brand-50/50",
  ghost: "text-slate-600 hover:bg-slate-100 hover:text-ink",
  soft: "border border-brand-100 bg-brand-50 text-brand-700 hover:bg-brand-100",
  danger: "bg-rose-600 text-white hover:bg-rose-700",
};
const SIZES: Record<Size, string> = {
  sm: "h-8 px-3 text-sm gap-1.5 rounded-lg",
  md: "h-10 px-4 text-sm gap-2 rounded-xl",
  lg: "h-12 px-6 text-base gap-2 rounded-xl",
  icon: "h-9 w-9 rounded-lg",
};

export const buttonClass = (variant: Variant = "primary", size: Size = "md", className?: string) =>
  cn("inline-flex shrink-0 items-center justify-center font-semibold whitespace-nowrap transition-all duration-150 focus-visible:ring-4 focus-visible:ring-brand-100 disabled:pointer-events-none disabled:opacity-50", VARIANTS[variant], SIZES[size], className);
