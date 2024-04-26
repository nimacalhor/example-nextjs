export const STATUS_BG_COLORS = {
  blocked: "bg-red-500 hover:bg-red-500",
  active: "bg-emerald-500 hover:bg-emerald-500",
  challenge: "bg-amber-500 hover:bg-amber-500",
  inactive: "bg-slate-800 dark:bg-slate-400",
} as const;

export const STATUS_SHADOW = {
  blocked: "shadow-red-500/50 shadow-md",
  active: "shadow-emerald-500/50 shadow-md",
  challenge: "shadow-amber-500/50 shadow-md",
  inactive: "",
} as const;

export const STATUS_BORDER_STYLES = {
  blocked: "hover:border-red-500",
  active: "hover:border-emerald-500",
  challenge: "hover:border-amber-500 hover:border-dashed hover:border-[3px]",
  inactive: "hover:border-slate-800 dark:hover:border-slate-400",
} as const;

export const STATUS_TITLES = {
  blocked: "بلاک شده",
  challenge: "نیاز به بازبینی",
  active: "فعال",
  inactive: "غیر فعال",
};

export const STATUS_TITLES_ARRAY_ENG = [
  "blocked",
  "challenge",
  "active",
  "inactive",
] as const;
