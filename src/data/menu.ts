import { resolveMenuImage } from "@/lib/menu-images";
import type { MenuCategory, MenuProduct, MenuVariation } from "@/types/menu";

const createVariations = (
  productId: string,
  variations: Array<{ label: string; size?: string; price: number }>
): MenuVariation[] =>
  variations.map((variation, index) => ({
    id: `${productId}-variation-${index + 1}`,
    ...variation
  }));

const createProduct = (
  product: Omit<MenuProduct, "image"> & { image?: string }
): MenuProduct => ({
  ...product,
  image: product.image ?? resolveMenuImage(product.name)
});

export const menuCategories: MenuCategory[] = [
  {
    id: "pratos-principais",
    label: "Pratos principais",
    description: "Pratos para a mesa principal."
  },
  {
    id: "acompanhamentos",
    label: "Acompanhamentos",
    description: "Complementos para o pedido."
  },
  {
    id: "entradas-petiscos",
    label: "Entradas",
    description: "Opções para começar."
  },
  {
    id: "tortas",
    label: "Tortas",
    description: "Tortas prontas para encomenda."
  },
  {
    id: "saladas",
    label: "Saladas",
    description: "Saladas e opções frias."
  }
];

export const menuProducts: MenuProduct[] = [
  createProduct({
    id: "paella",
    name: "Paella",
    category: "pratos-principais",
    subcategory: "Camarão",
    description: "Clássico de frutos do mar para compartilhar.",
    variations: createVariations("paella", [
      { label: "M", price: 260 },
      { label: "G", price: 380 }
    ])
  }),
  createProduct({
    id: "camarao-ao-thermidor",
    name: "Camarão ao Thermidor",
    category: "pratos-principais",
    subcategory: "Camarão",
    description: "Cremoso e gratinado.",
    variations: createVariations("camarao-ao-thermidor", [
      { label: "M", size: "1kg", price: 180 },
      { label: "G", size: "1,5kg", price: 240 }
    ])
  }),
  createProduct({
    id: "bobo-de-camarao",
    name: "Bobó de Camarão",
    category: "pratos-principais",
    subcategory: "Camarão",
    description: "Receita cremosa e marcante.",
    variations: createVariations("bobo-de-camarao", [
      { label: "M", size: "1kg", price: 180 },
      { label: "G", size: "1,5kg", price: 240 }
    ])
  }),
  createProduct({
    id: "arroz-cremoso-de-camarao",
    name: "Arroz Cremoso de Camarão",
    category: "pratos-principais",
    subcategory: "Camarão",
    description: "Arroz cremoso com sabor suave.",
    variations: createVariations("arroz-cremoso-de-camarao", [
      { label: "M", size: "1kg", price: 180 },
      { label: "G", size: "1,5kg", price: 240 }
    ])
  }),
  createProduct({
    id: "bacalhau-a-siqueira",
    name: "Bacalhau à Siqueira",
    category: "pratos-principais",
    subcategory: "Bacalhau",
    description: "Receita tradicional da casa.",
    variations: createVariations("bacalhau-a-siqueira", [
      { label: "P", price: 280 },
      { label: "M", price: 480 },
      { label: "G", price: 880 }
    ])
  }),
  createProduct({
    id: "bacalhau-nas-natas",
    name: "Bacalhau nas Natas",
    category: "pratos-principais",
    subcategory: "Bacalhau",
    description: "Cremoso e dourado.",
    variations: createVariations("bacalhau-nas-natas", [
      { label: "P", price: 280 },
      { label: "M", price: 480 },
      { label: "G", price: 880 }
    ])
  }),
  createProduct({
    id: "bacalhau-a-moda",
    name: "Bacalhau à Moda",
    category: "pratos-principais",
    subcategory: "Bacalhau",
    description: "Preparação clássica da Navio.",
    variations: createVariations("bacalhau-a-moda", [
      { label: "P", price: 280 },
      { label: "M", price: 480 },
      { label: "G", price: 880 }
    ])
  }),
  createProduct({
    id: "salmao-a-moda",
    name: "Salmão à Moda",
    category: "pratos-principais",
    subcategory: "Salmão",
    description: "Opção especial para encomenda.",
    variations: createVariations("salmao-a-moda", [{ label: "M", price: 240 }])
  }),
  createProduct({
    id: "salmao-a-belle-muniere",
    name: "Salmão à Belle Munière",
    category: "pratos-principais",
    subcategory: "Salmão",
    description: "Manteiga e toque cítrico.",
    variations: createVariations("salmao-a-belle-muniere", [
      { label: "M", price: 260 }
    ])
  }),
  createProduct({
    id: "tilapia-a-moda",
    name: "Tilápia à Moda",
    category: "pratos-principais",
    subcategory: "Tilápia",
    description: "Opção leve e versátil.",
    variations: createVariations("tilapia-a-moda", [{ label: "M", price: 180 }])
  }),
  createProduct({
    id: "tilapia-a-belle-muniere",
    name: "Tilápia à Belle Munière",
    category: "pratos-principais",
    subcategory: "Tilápia",
    description: "Clássico com manteiga e alcaparras.",
    variations: createVariations("tilapia-a-belle-muniere", [
      { label: "M", price: 260 }
    ])
  }),
  createProduct({
    id: "abadejo-a-moda",
    name: "Abadejo à Moda",
    category: "pratos-principais",
    subcategory: "Abadejo",
    description: "Receita especial para a data.",
    variations: createVariations("abadejo-a-moda", [{ label: "M", price: 260 }])
  }),
  createProduct({
    id: "abadejo-a-belle-muniere",
    name: "Abadejo à Belle Munière",
    category: "pratos-principais",
    subcategory: "Abadejo",
    description: "Preparação clássica e delicada.",
    variations: createVariations("abadejo-a-belle-muniere", [
      { label: "M", price: 280 }
    ])
  }),
  createProduct({
    id: "cuscuz-sardinha",
    name: "Cuscuz de Sardinha",
    category: "acompanhamentos",
    description: "Receita tradicional.",
    variations: createVariations("cuscuz-sardinha", [
      { label: "M", size: "700g", price: 90 }
    ])
  }),
  createProduct({
    id: "cuscuz-camarao",
    name: "Cuscuz de Camarão",
    category: "acompanhamentos",
    description: "Versão com camarão.",
    variations: createVariations("cuscuz-camarao", [
      { label: "M", size: "700g", price: 130 }
    ])
  }),
  createProduct({
    id: "farofa-de-banana",
    name: "Farofa de Banana",
    category: "acompanhamentos",
    description: "Acompanhamento clássico.",
    variations: createVariations("farofa-de-banana", [{ label: "M", price: 55 }])
  }),
  createProduct({
    id: "arroz-com-brocolis",
    name: "Arroz com Brócolis",
    category: "acompanhamentos",
    description: "Leve e versátil.",
    variations: createVariations("arroz-com-brocolis", [{ label: "M", price: 75 }])
  }),
  createProduct({
    id: "arroz-a-grega",
    name: "Arroz à Grega",
    category: "acompanhamentos",
    description: "Clássico para acompanhar.",
    variations: createVariations("arroz-a-grega", [{ label: "M", price: 75 }])
  }),
  createProduct({
    id: "arroz-de-amendoas",
    name: "Arroz de Amêndoas",
    category: "acompanhamentos",
    description: "Arroz com toque especial.",
    variations: createVariations("arroz-de-amendoas", [{ label: "M", price: 90 }])
  }),
  createProduct({
    id: "arroz-alho-e-salsa",
    name: "Arroz Alho e Salsa",
    category: "acompanhamentos",
    description: "Arroz aromático.",
    variations: createVariations("arroz-alho-e-salsa", [{ label: "M", price: 75 }])
  }),
  createProduct({
    id: "antepasto-polvo-e-lula",
    name: "Antepasto de Polvo e Lula",
    category: "entradas-petiscos",
    description: "Entrada fria para compartilhar.",
    variations: createVariations("antepasto-polvo-e-lula", [
      { label: "P", size: "300g", price: 65 }
    ])
  }),
  createProduct({
    id: "vinagrete-de-marisco",
    name: "Vinagrete de Marisco",
    category: "entradas-petiscos",
    description: "Fresco e leve.",
    variations: createVariations("vinagrete-de-marisco", [
      { label: "P", size: "300g", price: 55 }
    ])
  }),
  createProduct({
    id: "migas-de-bacalhau",
    name: "Migas de Bacalhau",
    category: "entradas-petiscos",
    description: "Entrada com sabor marcante.",
    variations: createVariations("migas-de-bacalhau", [
      { label: "P", size: "300g", price: 55 }
    ])
  }),
  createProduct({
    id: "sardela",
    name: "Sardela",
    category: "entradas-petiscos",
    description: "Ideal para servir com pães.",
    variations: createVariations("sardela", [
      { label: "P", size: "300g", price: 25 }
    ])
  }),
  createProduct({
    id: "ceviche",
    name: "Ceviche",
    category: "entradas-petiscos",
    description: "Fresco e cítrico.",
    variations: createVariations("ceviche", [
      { label: "P", size: "300g", price: 45 }
    ])
  }),
  createProduct({
    id: "torta-de-bacalhau",
    name: "Torta de Bacalhau",
    category: "tortas",
    description: "Torta pronta para encomenda.",
    variations: createVariations("torta-de-bacalhau", [
      { label: "800g", price: 85 }
    ])
  }),
  createProduct({
    id: "torta-de-camarao",
    name: "Torta de Camarão",
    category: "tortas",
    description: "Torta salgada da campanha.",
    variations: createVariations("torta-de-camarao", [
      { label: "800g", price: 85 }
    ])
  }),
  createProduct({
    id: "salada-de-bacalhau-com-grao-de-bico",
    name: "Salada de Bacalhau com Grão-de-bico",
    category: "saladas",
    description: "Salada fria com bacalhau.",
    variations: createVariations("salada-de-bacalhau-com-grao-de-bico", [
      { label: "500g", price: 90 },
      { label: "1kg", price: 160 }
    ])
  }),
  createProduct({
    id: "salada-de-bacalhau-da-casa",
    name: "Salada de Bacalhau da Casa",
    category: "saladas",
    description: "Receita tradicional da casa.",
    variations: createVariations("salada-de-bacalhau-da-casa", [
      { label: "500g", price: 90 },
      { label: "1kg", price: 160 }
    ])
  }),
  createProduct({
    id: "maionese-de-camarao",
    name: "Maionese de Camarão",
    category: "saladas",
    description: "Maionese especial com camarão.",
    variations: createVariations("maionese-de-camarao", [
      { label: "M", size: "800g", price: 120 }
    ])
  })
];
