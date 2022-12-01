import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  like?: SortOrder;
  restaurantId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
