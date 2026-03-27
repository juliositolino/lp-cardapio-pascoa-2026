"use client";

import Image from "next/image";
import { ClipboardList, MessageCircleMore } from "lucide-react";

import { SITE_CONFIG } from "@/data/config";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

type HeaderProps = {
  itemCount: number;
  onOpenCart: () => void;
  onCheckout: () => void;
  onQuestion: () => void;
  canCheckout: boolean;
};

export function Header({
  itemCount,
  onOpenCart,
  onCheckout,
  onQuestion,
  canCheckout
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(6,19,31,0.95)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/10 bg-[var(--color-ivory)] shadow-[0_6px_18px_rgba(0,0,0,0.16)]">
            <Image
              src="/navio-logo.jpeg"
              alt="Logo Navio"
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-serif text-lg text-white sm:text-xl">
              {SITE_CONFIG.brandName}
            </p>
            <p className="text-xs text-slate-400">{SITE_CONFIG.campaign.title}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onQuestion}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            <span className="sm:hidden">Dúvida</span>
            <span className="hidden sm:inline">Tirar dúvida</span>
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 sm:inline-flex"
          >
            <ClipboardList className="h-4 w-4" />
            <span>Ver pedido</span>
            {itemCount > 0 ? (
              <span className="rounded-full bg-[var(--color-gold-500)] px-2 py-0.5 text-xs text-slate-950">
                {itemCount}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            onClick={onCheckout}
            disabled={!canCheckout}
            className="hidden items-center gap-2 rounded-full bg-[var(--color-gold-500)] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[var(--color-gold-400)] disabled:cursor-not-allowed disabled:opacity-50 sm:inline-flex"
          >
            <MessageCircleMore className="h-4 w-4" />
            Enviar pelo WhatsApp
          </button>
        </div>
      </div>
    </header>
  );
}
