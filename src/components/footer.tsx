import { Instagram } from "lucide-react";

import { SITE_CONFIG } from "@/data/config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(4,12,21,0.7)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-serif text-xl text-white">{SITE_CONFIG.brandName}</p>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <span>{SITE_CONFIG.since}</span>
          <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[var(--color-gold-400)]">
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
