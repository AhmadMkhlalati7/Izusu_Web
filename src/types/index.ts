interface Product {
   id: number,
      title:string,
      description: string,
      category: string,
      price: number   ,
      discountPercentage:number ,
      rating: number ,
      stock: number ,
       brand: string,
      sku: string
}


type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Review = {
  rating: number;
  comment: string;
  reviewerName: string;
};

type Meta = {
  barcode: string;
};

type CartItem = {
  quantity: number;
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  thumbnail: string;
};

export type {Product,CartItem,Meta,Review,Dimensions};