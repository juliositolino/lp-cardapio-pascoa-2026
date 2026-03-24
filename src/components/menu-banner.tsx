import Image from "next/image";

export function MenuBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0c2942] shadow-[0_12px_36px_rgba(0,0,0,0.18)]">
        <div className="relative aspect-[3.2/1] min-h-[108px] w-full sm:aspect-[4.2/1] md:min-h-[132px]">
          <Image
            src="/campaign-cover.jpeg"
            alt="Banner do Cardápio Especial de Páscoa"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,18,33,0.02),rgba(4,18,33,0.08))]" />
        </div>
      </div>
    </section>
  );
}
