// types/product.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  brand: string;
}

export interface CartItem extends Product {
  quantity: number;
}
