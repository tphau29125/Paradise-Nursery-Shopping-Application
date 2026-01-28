import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increaseQty(item.id));
  };

  const handleDecrement = () => {
    dispatch(decreaseQty(item.id));
  };

  const handleDelete = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>

      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <p>Total: ${item.price * item.quantity}</p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CartItem;
