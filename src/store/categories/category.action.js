import { createAction } from "utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./category.type";

export const fetchCategoriesStart = () => {
  return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (categories) => {
  return createAction(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categories
  );
};

export const fetchCategoriesFailed = (error) => {
  return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES, error);
};
