import { StringFilter } from "../../util/StringFilter";
import { CuisineListRelationFilter } from "../cuisine/CuisineListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type RestaurantWhereInput = {
  address?: StringFilter;
  cuisines?: CuisineListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  reviews?: ReviewListRelationFilter;
};
