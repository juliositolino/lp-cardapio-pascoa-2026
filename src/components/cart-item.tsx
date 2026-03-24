import Image from "next/image";
import { Trash2 } from "lucide-react";

import { QuantitySelector } from "@/components/quantity-selector";
import { formatCurrency } from "@/lib/utils";
import { getItemSubtotal } from "@/lib/whatsapp";
import type { CartItem as CartItemType } from "@/types/menu";

type CartItemProps = {
  item: CartItemType;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export function CartItem({ item, onIncrease, onDecrease, onRemove }: CartItemProps) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
      <div className="flex gap-3">
        {item.image ? (
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-medium text-white">{item.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.variationLabel}</p>
            </div>
            <button
              type="button"
              onClick={onRemove}
              aria-label={`Remover ${item.name} do carrinho`}
              className="rounded-full p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <QuantitySelector
              quantity={item.quantity}
              onDecrease={onDecrease}
              onIncrease={onIncrease}
            />
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Subtotal
              </p>
              <p className="font-medium text-[var(--color-gold-400)]">
                {formatCurrency(getItemSubtotal(item))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
