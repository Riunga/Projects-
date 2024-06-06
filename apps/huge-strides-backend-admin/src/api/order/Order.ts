import { Address } from "../address/Address";
import { User } from "../user/User";

export type Order = {
  address?: Address | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
};
