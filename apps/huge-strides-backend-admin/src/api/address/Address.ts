import { Order } from "../order/Order";
import { User } from "../user/User";

export type Address = {
  city: string | null;
  country: string | null;
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  state: string | null;
  street: string | null;
  updatedAt: Date;
  user?: User | null;
  zipCode: number | null;
};
