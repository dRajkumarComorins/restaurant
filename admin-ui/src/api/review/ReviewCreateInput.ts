import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  content: string;
  like: boolean;
  restaurant?: RestaurantWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
