import { OrderUpdateManyWithoutAddressesInput } from "./OrderUpdateManyWithoutAddressesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressUpdateInput = {
  city?: string | null;
  country?: string | null;
  orders?: OrderUpdateManyWithoutAddressesInput;
  state?: string | null;
  street?: string | null;
  user?: UserWhereUniqueInput | null;
  zipCode?: number | null;
};
