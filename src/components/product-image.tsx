import Image from "next/image";

type ProductImageProps = {
  src?: string;
  alt: string;
};

export function ProductImage({ src, alt }: ProductImageProps) {
  if (!src) {
    return null;
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-white/10">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(4,18,33,0.18))]" />
    </div>
  );
}
