import { Minus, Plus } from "lucide-react";

type QuantitySelectorProps = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

export function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease
}: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/25">
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Diminuir quantidade"
        className="rounded-full p-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm text-white">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Aumentar quantidade"
        className="rounded-full p-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
