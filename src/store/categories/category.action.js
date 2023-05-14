import { createAction } from "utils/firebase/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./category.type";

export const setCategories = (categories) => {
  return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categories);
};
