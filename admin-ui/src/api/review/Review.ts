import { Restaurant } from "../restaurant/Restaurant";
import { User } from "../user/User";

export type Review = {
  content: string;
  createdAt: Date;
  id: string;
  like: boolean;
  restaurant?: Restaurant | null;
  updatedAt: Date;
  user?: User | null;
};
