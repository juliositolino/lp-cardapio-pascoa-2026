"use client";

import { useEffect, useMemo, useState } from "react";

import { getCartSubtotal } from "@/lib/whatsapp";
import type { CartItem, MenuProduct, MenuVariation } from "@/types/menu";

const STORAGE_KEY = "navio-pascoa-cart";
const NOTES_STORAGE_KEY = "navio-pascoa-notes";

function getVariationLabel(variation: MenuVariation) {
  if (variation.size && variation.label === "Única") {
    return variation.size;
  }

  return variation.size ? `${variation.label} ${variation.size}` : variation.label;
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [notes, setNotes] = useState("");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const storedItems = window.localStorage.getItem(STORAGE_KEY);
      const storedNotes = window.localStorage.getItem(NOTES_STORAGE_KEY);

      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }

      if (storedNotes) {
        setNotes(storedNotes);
      }
    } catch {
      setItems([]);
      setNotes("");
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isReady) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [isReady, items]);

  useEffect(() => {
    if (!isReady) return;
    window.localStorage.setItem(NOTES_STORAGE_KEY, notes);
  }, [isReady, notes]);

  const subtotal = useMemo(() => getCartSubtotal(items), [items]);
  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  function addItem(product: MenuProduct, variation: MenuVariation) {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.productId === product.id && item.variationId === variation.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === product.id && item.variationId === variation.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentItems,
        {
          productId: product.id,
          variationId: variation.id,
          name: product.name,
          variationLabel: getVariationLabel(variation),
          price: variation.price,
          quantity: 1,
          image: product.image
        }
      ];
    });
  }

  function increaseItem(productId: string, variationId: string) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId && item.variationId === variationId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseItem(productId: string, variationId: string) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.productId === productId && item.variationId === variationId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(productId: string, variationId: string) {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.productId === productId && item.variationId === variationId)
      )
    );
  }

  function clearCart() {
    setItems([]);
    setNotes("");
  }

  return {
    items,
    notes,
    setNotes,
    subtotal,
    totalItems,
    isReady,
    addItem,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart
  };
}
