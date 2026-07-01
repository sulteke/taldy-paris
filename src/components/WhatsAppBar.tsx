import { WhatsAppIcon } from "./icons";
import { waLink } from "@/data/site";

/** Sticky bottom WhatsApp CTA — shown on mobile only (menu / banquet pages). */
export function WhatsAppBar({
  label = "Заказать / Забронировать стол",
  message,
}: {
  label?: string;
  message: string;
}) {
  return (
    <div className="sticky bottom-0 z-30 border-t border-teal-900/10 bg-cream-50/95 p-3 backdrop-blur lg:hidden">
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-whatsapp px-6 font-semibold text-white shadow-card transition-all hover:brightness-95"
      >
        <WhatsAppIcon className="h-5 w-5" />
        {label}
      </a>
    </div>
  );
}
