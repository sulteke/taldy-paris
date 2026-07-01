import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { WhatsAppIcon } from "./icons";

type Variant = "primary" | "outline" | "whatsapp" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "min-h-[44px] transition-all duration-200 ease-out focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-cream-50 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal-900 text-white shadow-sm hover:bg-[#185953] hover:-translate-y-0.5 hover:shadow-card",
  outline:
    "border-[1.5px] border-teal-900 text-teal-900 hover:bg-teal-100",
  whatsapp:
    "bg-whatsapp text-white shadow-sm hover:brightness-95 hover:-translate-y-0.5 hover:shadow-card",
  ghost: "link-underline px-0 min-h-0 rounded-none",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-2.5 text-[15px]",
  lg: "px-8 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  /** Show the WhatsApp glyph before the label. */
  withWhatsAppIcon?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className"> & { href?: undefined };

function classesFor(variant: Variant, size: Size, className: string) {
  const sizeClass = variant === "ghost" ? "" : sizes[size];
  return `${base} ${variants[variant]} ${sizeClass} ${className}`.trim();
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    withWhatsAppIcon,
  } = props;

  const content = (
    <>
      {withWhatsAppIcon && <WhatsAppIcon className="h-[18px] w-[18px]" />}
      {children}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, external, variant: _v, size: _s, children: _c, className: _cn, withWhatsAppIcon: _w, ...rest } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classesFor(variant, size, className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classesFor(variant, size, className)} {...rest}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, children: _c, className: _cn, withWhatsAppIcon: _w, href: _h, ...rest } = props as ButtonAsButton;
  return (
    <button className={classesFor(variant, size, className)} {...rest}>
      {content}
    </button>
  );
}
