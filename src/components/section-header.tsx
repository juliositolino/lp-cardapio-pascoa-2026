type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description
}: SectionHeaderProps) {
  return (
    <div className="space-y-1">
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-500)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-2xl text-white md:text-3xl">{title}</h2>
      {description ? (
        <p className="text-sm text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}
