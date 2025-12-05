interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  image: string;
  stock?: number;
  price: number;
  category: string;
  description: string;
  rating: Rating;
}

export interface CartProduct extends Product {
  quantity: number;
}
