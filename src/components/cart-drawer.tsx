"use client";

import { useEffect } from "react";
import { ShoppingBag, X } from "lucide-react";

import { CartItem } from "@/components/cart-item";
import { OrderSummary } from "@/components/order-summary";
import type { CartItem as CartItemType } from "@/types/menu";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  items: CartItemType[];
  notes: string;
  onNotesChange: (value: string) => void;
  subtotal: number;
  totalItems: number;
  onIncrease: (productId: string, variationId: string) => void;
  onDecrease: (productId: string, variationId: string) => void;
  onRemove: (productId: string, variationId: string) => void;
  onCheckout: () => void;
  desktop?: boolean;
};

export function CartDrawer({
  isOpen,
  onClose,
  items,
  notes,
  onNotesChange,
  subtotal,
  totalItems,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
  desktop = false
}: CartDrawerProps) {
  useEffect(() => {
    if (desktop) return;

    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [desktop, isOpen]);

  if (desktop) {
    return (
      <aside
        id="pedido"
        className="flex max-h-[calc(100vh-8rem)] flex-col rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,18,31,0.98),rgba(5,15,27,0.98))] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
      >
        <DrawerContent
          items={items}
          notes={notes}
          onNotesChange={onNotesChange}
          subtotal={subtotal}
          totalItems={totalItems}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
          onCheckout={onCheckout}
        />
      </aside>
    );
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-950/55 backdrop-blur-sm transition ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } lg:hidden`}
        onClick={onClose}
      />

      <aside
        id="pedido"
        className={`fixed inset-x-0 bottom-0 z-50 flex max-h-[88vh] flex-col rounded-t-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,18,31,0.98),rgba(5,15,27,0.98))] p-4 shadow-[0_-24px_60px_rgba(0,0,0,0.4)] transition lg:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar pedido"
            className="rounded-full p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <DrawerContent
          items={items}
          notes={notes}
          onNotesChange={onNotesChange}
          subtotal={subtotal}
          totalItems={totalItems}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
          onCheckout={onCheckout}
        />
      </aside>
    </>
  );
}

type DrawerContentProps = Omit<CartDrawerProps, "isOpen" | "onClose" | "desktop">;

function DrawerContent({
  items,
  notes,
  onNotesChange,
  subtotal,
  totalItems,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout
}: DrawerContentProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-full bg-[var(--color-gold-500)]/12 p-3 text-[var(--color-gold-400)]">
          <ShoppingBag className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-white">Seu pedido</h2>
          <p className="text-sm text-slate-400">Revise e envie pelo WhatsApp</p>
        </div>
      </div>

      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
        {items.length > 0 ? (
          items.map((item) => (
            <CartItem
              key={`${item.productId}-${item.variationId}`}
              item={item}
              onIncrease={() => onIncrease(item.productId, item.variationId)}
              onDecrease={() => onDecrease(item.productId, item.variationId)}
              onRemove={() => onRemove(item.productId, item.variationId)}
            />
          ))
        ) : (
          <div className="rounded-[1.5rem] border border-dashed border-white/12 bg-white/[0.03] px-5 py-8 text-center">
            <p className="font-serif text-xl text-white">Pedido vazio</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Adicione itens do cardápio para continuar.
            </p>
          </div>
        )}

        <label className="block">
          <span className="mb-3 block text-xs uppercase tracking-[0.3em] text-slate-400">
            Observações
          </span>
          <textarea
            value={notes}
            onChange={(event) => onNotesChange(event.target.value)}
            placeholder="Ex.: sem cebola, horário desejado..."
            className="min-h-28 w-full rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[var(--color-gold-500)] focus:bg-white/[0.07]"
          />
        </label>
      </div>

      <div className="mt-5">
        <OrderSummary
          subtotal={subtotal}
          totalItems={totalItems}
          onCheckout={onCheckout}
          disabled={items.length === 0}
        />
      </div>
    </div>
  );
}
