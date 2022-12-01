import { Restaurant as TRestaurant } from "../api/restaurant/Restaurant";

export const RESTAURANT_TITLE_FIELD = "name";

export const RestaurantTitle = (record: TRestaurant): string => {
  return record.name || record.id;
};
