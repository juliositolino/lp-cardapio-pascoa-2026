import type { MenuCategory } from "@/types/menu";

type CategoryNavProps = {
  categories: MenuCategory[];
};

export function CategoryNav({ categories }: CategoryNavProps) {
  return (
    <div className="sticky top-[69px] z-30 overflow-x-auto border-b border-white/10 bg-[rgba(6,19,31,0.95)] py-3 backdrop-blur">
      <nav className="flex min-w-max gap-2">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-[var(--color-gold-500)]/30 hover:text-white"
          >
            {category.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
