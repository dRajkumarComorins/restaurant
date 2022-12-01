import { RestaurantWhereInput } from "./RestaurantWhereInput";
import { RestaurantOrderByInput } from "./RestaurantOrderByInput";

export type RestaurantFindManyArgs = {
  where?: RestaurantWhereInput;
  orderBy?: Array<RestaurantOrderByInput>;
  skip?: number;
  take?: number;
};
