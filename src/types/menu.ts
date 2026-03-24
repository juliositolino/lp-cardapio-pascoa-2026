export type MenuCategoryId =
  | "pratos-principais"
  | "acompanhamentos"
  | "entradas-petiscos"
  | "tortas"
  | "saladas";

export type MenuVariation = {
  id: string;
  label: string;
  size?: string;
  price: number;
};

export type MenuProduct = {
  id: string;
  name: string;
  category: MenuCategoryId;
  subcategory?: string;
  description: string;
  image?: string;
  variations: MenuVariation[];
};

export type MenuCategory = {
  id: MenuCategoryId;
  label: string;
  description: string;
};

export type CartItem = {
  productId: string;
  variationId: string;
  name: string;
  variationLabel: string;
  price: number;
  quantity: number;
  image?: string;
};
