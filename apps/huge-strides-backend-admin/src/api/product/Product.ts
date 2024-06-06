import { Category } from "../category/Category";
import { JsonValue } from "type-fest";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  name: string | null;
  price: number | null;
  stock: number | null;
  updatedAt: Date;
};
