import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "id";

export const ReviewTitle = (record: TReview): string => {
  return record.id || record.id;
};
