import { Cuisine } from "../cuisine/Cuisine";
import { Review } from "../review/Review";

export type Restaurant = {
  address: string;
  createdAt: Date;
  cuisines?: Array<Cuisine>;
  id: string;
  name: string;
  reviews?: Array<Review>;
  updatedAt: Date;
};
