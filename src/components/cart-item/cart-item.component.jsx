import {CartItemContainer,DetailItem} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
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
