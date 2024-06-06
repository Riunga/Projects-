import { OrderCreateNestedManyWithoutAddressesInput } from "./OrderCreateNestedManyWithoutAddressesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressCreateInput = {
  city?: string | null;
  country?: string | null;
  orders?: OrderCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  street?: string | null;
  user?: UserWhereUniqueInput | null;
  zipCode?: number | null;
};
