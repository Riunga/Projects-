import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  address?: AddressWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  totalPrice?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
