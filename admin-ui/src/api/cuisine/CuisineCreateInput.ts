import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type CuisineCreateInput = {
  name: string;
  restaurant?: RestaurantWhereUniqueInput | null;
};
