import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  zipCode?: IntNullableFilter;
};
