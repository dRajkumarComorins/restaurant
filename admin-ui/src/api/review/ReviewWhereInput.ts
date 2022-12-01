import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  content?: StringFilter;
  id?: StringFilter;
  like?: BooleanFilter;
  restaurant?: RestaurantWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
