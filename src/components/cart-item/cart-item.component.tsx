import { CartItemContainer, DetailItem } from "./cart-item.styles";
import { CartItem as CartItemType } from "store/cart/cart.type";

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <DetailItem>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </DetailItem>
    </CartItemContainer>
  );
};

export default CartItem;
