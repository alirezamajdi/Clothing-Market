import { createAction } from "utils/firebase/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./category.type";
import { getCategoriesAndDocuments } from "utils/firebase/firebase.utils";


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

export const fetchCategoriesAsync = () => async (dispath) => {
  dispath(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispath(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispath(fetchCategoriesFailed(error));
  }
};
