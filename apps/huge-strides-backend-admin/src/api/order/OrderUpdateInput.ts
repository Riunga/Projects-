import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  status?: "Option1" | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
