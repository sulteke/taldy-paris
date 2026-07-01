import { UtensilsCrossed } from "lucide-react";

/**
 * Branded image PLACEHOLDER.
 * No production photography exists yet (see launch checklist). These blocks are
 * sized to the final aspect ratios so the layout is correct and there is no CLS
 * once real <Image> assets are dropped in. `label` doubles as the accessible
 * description and previews the intended subject (e.g. a dish or interior name).
 */

type Ratio = "4/3" | "1/1" | "16/9" | "3/4" | "21/9";

const ratioClass: Record<Ratio, string> = {
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  "3/4": "aspect-[3/4]",
  "21/9": "aspect-[21/9]",
};

// Deterministic palette pick so a given label always renders the same tint.
const palettes = [
  "from-teal-900 to-teal-600",
  "from-teal-600 to-teal-900",
  "from-[#2F8F86] to-[#1C6B64]",
  "from-[#C2773D] to-[#1C6B64]",
  "from-[#1C6B64] to-[#C9A227]",
  "from-[#185953] to-[#2F8F86]",
];

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

type PlaceholderProps = {
  label: string;
  ratio?: Ratio;
  className?: string;
  /** Hide the caption text (still used as aria-label). */
  hideLabel?: boolean;
  /** Hide the utensils glyph too — used for full-bleed hero backgrounds. */
  hideIcon?: boolean;
  rounded?: boolean;
  /** Stretch to the parent's height instead of using a fixed aspect ratio. */
  fill?: boolean;
};

export function Placeholder({
  label,
  ratio = "4/3",
  className = "",
  hideLabel = false,
  hideIcon = false,
  rounded = true,
  fill = false,
}: PlaceholderProps) {
  const palette = palettes[hash(label) % palettes.length];

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden ${
        rounded ? "rounded-card" : ""
      } ${fill ? "h-full w-full" : ratioClass[ratio]} bg-gradient-to-br ${palette} ${className}`}
    >
      {/* subtle plant/dot motif */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        {!hideIcon && (
          <UtensilsCrossed
            className="h-7 w-7 text-white/70"
            aria-hidden="true"
            strokeWidth={1.5}
          />
        )}
        {!hideLabel && (
          <span className="text-balance text-sm font-medium leading-snug text-white/90">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
