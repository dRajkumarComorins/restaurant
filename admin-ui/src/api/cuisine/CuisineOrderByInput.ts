import { SortOrder } from "../../util/SortOrder";

export type CuisineOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  restaurantId?: SortOrder;
  updatedAt?: SortOrder;
};
