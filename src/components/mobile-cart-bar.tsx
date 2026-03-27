"use client";

import { ShoppingBag } from "lucide-react";

import { formatCurrency } from "@/lib/utils";

type MobileCartBarProps = {
  totalItems: number;
  subtotal: number;
  onOpen: () => void;
};

export function MobileCartBar({
  totalItems,
  subtotal,
  onOpen
}: MobileCartBarProps) {
  if (totalItems === 0) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-30 lg:hidden">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(7,18,31,0.96)] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm text-white"
        >
          <ShoppingBag className="h-4 w-4 text-[var(--color-gold-400)]" />
          {totalItems} item(ns)
        </button>
        <div className="ml-auto text-right">
          <p className="text-[11px] text-slate-500">Total</p>
          <p className="text-sm font-semibold text-white">{formatCurrency(subtotal)}</p>
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold-500)] px-4 py-3 text-sm font-semibold text-slate-950"
        >
          Finalizar pedido
        </button>
      </div>
    </div>
  );
}
