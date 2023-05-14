import { addItemToCart } from "store/cart/cart.action";
import { selectCartItems } from "store/cart/cart.selector.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../button/button.component";

import { ProductCardContainer } from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
