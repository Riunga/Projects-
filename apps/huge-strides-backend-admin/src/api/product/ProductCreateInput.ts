import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  price?: number | null;
  stock?: number | null;
};
