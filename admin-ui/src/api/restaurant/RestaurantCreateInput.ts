import { CuisineCreateNestedManyWithoutRestaurantsInput } from "./CuisineCreateNestedManyWithoutRestaurantsInput";
import { ReviewCreateNestedManyWithoutRestaurantsInput } from "./ReviewCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address: string;
  cuisines?: CuisineCreateNestedManyWithoutRestaurantsInput;
  name: string;
  reviews?: ReviewCreateNestedManyWithoutRestaurantsInput;
};
