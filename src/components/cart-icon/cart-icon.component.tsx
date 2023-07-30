import { selectIsOpen, selectCartCount } from "store/cart/cart.selector";
import { useSelector } from "react-redux";
import { setIsCartOpen } from "store/cart/cart.action";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
import { useDispatch } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsOpen);

  const toggleIsCartOpen = () => {
    return dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
