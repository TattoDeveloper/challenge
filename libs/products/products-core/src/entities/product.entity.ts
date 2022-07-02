interface price {
    currency: string;
    amount: number;
    decimals: number;
}

export interface Product{
  id: string;
  title: string;
  price: price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  description?: string;
}