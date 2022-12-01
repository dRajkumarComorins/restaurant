import { Cuisine as TCuisine } from "../api/cuisine/Cuisine";

export const CUISINE_TITLE_FIELD = "name";

export const CuisineTitle = (record: TCuisine): string => {
  return record.name || record.id;
};
