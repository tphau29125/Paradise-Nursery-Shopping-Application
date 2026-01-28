import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span> ${item.price}</span>
          <span> Total: ${item.price * item.quantity}</span>

          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>

          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <h3>Total Amount: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartItem;
