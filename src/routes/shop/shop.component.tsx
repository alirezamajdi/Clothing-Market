import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./shop.styles.scss";
import CategoryPreview from "routes/categories-preview/categories-preview.component";
import Category from "routes/category/category.component";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "store/categories/category.action";
import Spinner from "components/spinner/spinner.component";
import { selectCategoriesIsLoading } from "store/categories/category.selector";
import { useSelector } from "react-redux";

const Shop = () => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
