"use client";

import { useMemo, useState } from "react";

import { CartDrawer } from "@/components/cart-drawer";
import { CategoryNav } from "@/components/category-nav";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MenuBanner } from "@/components/menu-banner";
import { MobileCartBar } from "@/components/mobile-cart-bar";
import { ProductCard } from "@/components/product-card";
import { SectionHeader } from "@/components/section-header";
import { SITE_CONFIG } from "@/data/config";
import { menuCategories, menuProducts } from "@/data/menu";
import { useCart } from "@/hooks/use-cart";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function HomePage() {
  const {
    items,
    notes,
    setNotes,
    subtotal,
    totalItems,
    addItem,
    increaseItem,
    decreaseItem,
    removeItem
  } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const quantityMap = useMemo(() => {
    return new Map(
      items.map((item) => [`${item.productId}:${item.variationId}`, item.quantity])
    );
  }, [items]);

  function handleAdd(productId: string, variationId: string) {
    const product = menuProducts.find((item) => item.id === productId);
    const variation = product?.variations.find((item) => item.id === variationId);

    if (!product || !variation) return;

    addItem(product, variation);
    setIsCartOpen(true);
  }

  function handleCheckout() {
    if (items.length === 0) return;
    window.open(buildWhatsAppUrl(items, notes), "_blank", "noopener,noreferrer");
  }

  function handleOpenCart() {
    setIsCartOpen(true);
  }

  function getQuantity(productId: string, variationId: string) {
    return quantityMap.get(`${productId}:${variationId}`) ?? 0;
  }

  return (
    <main className="pb-28 lg:pb-0">
      <Header
        itemCount={totalItems}
        onOpenCart={handleOpenCart}
        onCheckout={handleCheckout}
        canCheckout={items.length > 0}
      />
      <MenuBanner />

      <div className="pb-20">
        <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-[var(--color-gold-500)]/20 bg-[var(--color-gold-500)]/10 px-3 py-1.5 text-xs font-medium text-[var(--color-gold-400)]">
              {SITE_CONFIG.campaign.deadline}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
              {SITE_CONFIG.campaign.packaging}
            </span>
          </div>
        </section>

        <section id="cardapio" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CategoryNav categories={menuCategories} />
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8">
          <div className="space-y-8">
            {menuCategories.map((category) => {
              const products = menuProducts.filter(
                (product) => product.category === category.id
              );

              return (
                <section
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-32 space-y-4"
                >
                  <SectionHeader
                    title={category.label}
                    description={category.description}
                  />

                  <div className="grid gap-3 md:grid-cols-2">
                    {products.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        getQuantity={getQuantity}
                        onIncrease={increaseItem}
                        onDecrease={decreaseItem}
                        onAdd={(currentProduct, variationId) =>
                          handleAdd(currentProduct.id, variationId)
                        }
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <CartDrawer
                desktop
                isOpen
                onClose={() => setIsCartOpen(false)}
                items={items}
                notes={notes}
                onNotesChange={setNotes}
                subtotal={subtotal}
                totalItems={totalItems}
                onIncrease={increaseItem}
                onDecrease={decreaseItem}
                onRemove={removeItem}
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={items}
        notes={notes}
        onNotesChange={setNotes}
        subtotal={subtotal}
        totalItems={totalItems}
        onIncrease={increaseItem}
        onDecrease={decreaseItem}
        onRemove={removeItem}
        onCheckout={handleCheckout}
      />

      <MobileCartBar
        totalItems={totalItems}
        subtotal={subtotal}
        onOpen={() => setIsCartOpen(true)}
        onCheckout={handleCheckout}
      />
    </main>
  );
}
