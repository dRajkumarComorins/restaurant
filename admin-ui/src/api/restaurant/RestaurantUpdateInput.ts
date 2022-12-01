import { CuisineUpdateManyWithoutRestaurantsInput } from "./CuisineUpdateManyWithoutRestaurantsInput";
import { ReviewUpdateManyWithoutRestaurantsInput } from "./ReviewUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: string;
  cuisines?: CuisineUpdateManyWithoutRestaurantsInput;
  name?: string;
  reviews?: ReviewUpdateManyWithoutRestaurantsInput;
};
