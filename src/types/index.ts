export type ProductProps = {
  id: string;
  title: string;
  type: string;
  image: string;
  price: number;
  description: string;
};

export type ProductsCategoriesProps = {
  title: string;
  products: ProductProps[];
};

export type AddressProps = {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
};

export type SellerProps = {
  id: number;
  avatarUrl: string;
  rating: number;
  name: string;
  description: string;
  slug: string;
  about: string;
  address: AddressProps;
  contact: {
    phone: string;
    email: string;
  };
  methodPayments: string[];
  dateTimeWork: {
    days: string[];
    hours: string;
  };
  productsCategories: ProductsCategoriesProps[];
};
