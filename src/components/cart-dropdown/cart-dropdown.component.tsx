import { useCallback, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "components/cart-item/cart-item.component";
import { selectCartItems } from "store/cart/cart.selector";
import { useSelector } from "react-redux";

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const sleep = (milliseconds: number): void => {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
};

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const func = useMemo(() => {
    console.log("ccc start");
    sleep(2000);
    console.log("ccc end");
    return 100 + count;
  }, [count]);

  const goToCheckoutHandler = useCallback(() => {
    navigate("checkout");
  }, []);

  return (
    <CartDropDownContainer>
      <CartItems>
        {/* {func}
        <button onClick={() => setCount(count + 1)}>biiiib</button> */}
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;

