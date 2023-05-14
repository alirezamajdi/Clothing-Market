import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./shop.styles.scss";
import CategoryPreview from "routes/categories-preview/categories-preview.component";
import Category from "routes/category/category.component";
import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategories } from "store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //addCollectionAndDocuments('categories',SHOP_DATA)
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategories(categoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

