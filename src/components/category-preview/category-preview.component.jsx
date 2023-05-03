import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { CategoryPreviewContainer } from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <Link to={"/shop/" + title}>
      <span className="title">{title ? title.toUpperCase() : ""}</span>
    </Link>
    <div className="preview">
      {products &&
        products
          .filter((_, idx) => idx < 4)
          .map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
