import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type CuisineUpdateInput = {
  name?: string;
  restaurant?: RestaurantWhereUniqueInput | null;
};
