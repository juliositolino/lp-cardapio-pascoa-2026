import type { MenuCategory } from "@/types/menu";

type CategoryNavProps = {
  categories: MenuCategory[];
};

export function CategoryNav({ categories }: CategoryNavProps) {
  return (
    <div className="sticky top-[69px] z-30 border-b border-white/10 bg-[rgba(6,19,31,0.95)] py-3 backdrop-blur">
      <nav className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center text-[13px] text-slate-200 transition hover:border-[var(--color-gold-500)]/30 hover:text-white"
          >
            {category.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
