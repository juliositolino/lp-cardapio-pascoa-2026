"use client";

import { useEffect, useState } from "react";
import { Check, ShoppingBag } from "lucide-react";

import { ProductImage } from "@/components/product-image";
import { QuantitySelector } from "@/components/quantity-selector";
import { formatCurrency } from "@/lib/utils";
import type { MenuProduct } from "@/types/menu";

type ProductCardProps = {
  product: MenuProduct;
  onAdd: (product: MenuProduct, variationId: string) => void;
  getQuantity: (productId: string, variationId: string) => number;
  onIncrease: (productId: string, variationId: string) => void;
  onDecrease: (productId: string, variationId: string) => void;
};

export function ProductCard({
  product,
  onAdd,
  getQuantity,
  onIncrease,
  onDecrease
}: ProductCardProps) {
  const [selectedVariationId, setSelectedVariationId] = useState(
    product.variations[0]?.id ?? ""
  );
  const [isAdded, setIsAdded] = useState(false);

  const selectedVariation =
    product.variations.find((variation) => variation.id === selectedVariationId) ??
    product.variations[0];

  useEffect(() => {
    if (!isAdded) return;
    const timeout = window.setTimeout(() => setIsAdded(false), 1600);
    return () => window.clearTimeout(timeout);
  }, [isAdded]);

  function handleAdd() {
    if (!selectedVariation) return;
    onAdd(product, selectedVariation.id);
    setIsAdded(true);
  }

  const quantityInCart = selectedVariation
    ? getQuantity(product.id, selectedVariation.id)
    : 0;

  return (
    <article className="group flex h-full flex-col rounded-[1.4rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:p-4">
      <ProductImage src={product.image} alt={product.name} />

      <div className={`${product.image ? "mt-3" : ""} flex flex-1 flex-col`}>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {product.subcategory ? (
            <span className="rounded-full border border-[var(--color-gold-500)]/20 bg-[var(--color-gold-500)]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-400)]">
              {product.subcategory}
            </span>
          ) : null}
        </div>

        <h3 className="pr-2 font-serif text-xl leading-tight text-white">
          {product.name}
        </h3>
        <p className="mt-1 truncate text-sm text-slate-400">{product.description}</p>

        <div className="mt-3 grid gap-2">
            {product.variations.map((variation) => {
              const variationText = variation.size
                ? `${variation.label} ${variation.size}`
                : variation.label;

              const isSelected = variation.id === selectedVariationId;

              return (
                <button
                  key={variation.id}
                  type="button"
                  onClick={() => setSelectedVariationId(variation.id)}
                  className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-left transition ${
                    isSelected
                      ? "border-[var(--color-gold-500)] bg-[var(--color-gold-500)]/10 text-white"
                      : "border-white/10 bg-slate-950/20 text-slate-300 hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <span className="text-sm">{variationText}</span>
                  <span className="text-sm font-medium text-[var(--color-gold-400)]">
                    {formatCurrency(variation.price)}
                  </span>
                </button>
              );
            })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Preço
            </p>
            <p className="mt-1 font-serif text-2xl text-white">
              {formatCurrency(selectedVariation?.price ?? 0)}
            </p>
          </div>

          {quantityInCart > 0 && selectedVariation ? (
            <QuantitySelector
              quantity={quantityInCart}
              onDecrease={() => onDecrease(product.id, selectedVariation.id)}
              onIncrease={() => onIncrease(product.id, selectedVariation.id)}
            />
          ) : (
            <button
              type="button"
              onClick={handleAdd}
              className={`inline-flex min-w-[128px] items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                isAdded
                  ? "bg-emerald-500 text-white"
                  : "bg-[var(--color-gold-500)] text-slate-950 hover:bg-[var(--color-gold-400)]"
              }`}
            >
              {isAdded ? (
                <Check className="h-4 w-4" />
              ) : (
                <ShoppingBag className="h-4 w-4" />
              )}
              {isAdded ? "Adicionado" : "Adicionar"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
