export type ProductsDataType = {
  id: number;
  heading: string;
  subheading: string;
  button: string;
  products: {
    id: number;
    heading: string;
    description: string;
    icon: string;
  }[];
};
