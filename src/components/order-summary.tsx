import { MessageCircleMore } from "lucide-react";

import { formatCurrency } from "@/lib/utils";

type OrderSummaryProps = {
  subtotal: number;
  totalItems: number;
  onCheckout: () => void;
  disabled?: boolean;
};

export function OrderSummary({
  subtotal,
  totalItems,
  onCheckout,
  disabled
}: OrderSummaryProps) {
  return (
    <div className="rounded-[1.7rem] border border-[var(--color-gold-500)]/20 bg-[linear-gradient(180deg,rgba(232,145,56,0.12),rgba(255,255,255,0.04))] p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Itens selecionados
          </p>
          <p className="mt-1 text-lg text-white">{totalItems} item(ns)</p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Subtotal</p>
          <p className="mt-1 font-serif text-3xl text-white">
            {formatCurrency(subtotal)}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onCheckout}
        disabled={disabled}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-gold-500)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[var(--color-gold-400)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <MessageCircleMore className="h-4 w-4" />
        Enviar pedido pelo WhatsApp
      </button>
    </div>
  );
}
