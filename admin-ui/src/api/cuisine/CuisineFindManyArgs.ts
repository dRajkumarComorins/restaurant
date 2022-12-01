import { CuisineWhereInput } from "./CuisineWhereInput";
import { CuisineOrderByInput } from "./CuisineOrderByInput";

export type CuisineFindManyArgs = {
  where?: CuisineWhereInput;
  orderBy?: Array<CuisineOrderByInput>;
  skip?: number;
  take?: number;
};
