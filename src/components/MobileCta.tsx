import { Phone, MessageCircle } from "lucide-react";
import { company } from "@/data/site";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-white/95 p-3 backdrop-blur-md xl:hidden">
      <a
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-3 py-3 text-center text-xs font-bold tracking-wider text-navy ring-1 ring-border uppercase"
        href={company.phoneHref}
      >
        <Phone className="size-4" />
        Call Us
      </a>
      <a
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 py-3 text-center text-xs font-bold tracking-wider text-navy uppercase"
        href={company.whatsappHref}
        target="_blank"
        rel="noreferrer noopener"
      >
        <MessageCircle className="size-4" />
        WhatsApp
      </a>
    </div>
  );
}
