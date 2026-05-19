"use client";

import { MessageCircle } from "lucide-react";
import { WA_LINK } from "./constants";

export function WhatsAppFloating() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow"
    >
      <MessageCircle />
    </a>
  );
}
