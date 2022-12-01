import { StringFilter } from "../../util/StringFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type CuisineWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  restaurant?: RestaurantWhereUniqueInput;
};
