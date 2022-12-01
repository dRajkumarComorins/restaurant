import { Restaurant } from "../restaurant/Restaurant";

export type Cuisine = {
  createdAt: Date;
  id: string;
  name: string;
  restaurant?: Restaurant | null;
  updatedAt: Date;
};
