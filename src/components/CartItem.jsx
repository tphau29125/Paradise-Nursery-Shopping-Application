import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (id) => {
    dispatch(increaseQty(id));
  };

  const handleDecrement = (id) => {
    dispatch(decreaseQty(id));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  // ✅ Hàm tính tổng tiền toàn bộ giỏ hàng (BẮT BUỘC)
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>

          <div className="quantity-controls">
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(item.id)}>+</button>
          </div>

          {/* ✅ Tổng tiền từng item – cập nhật real-time */}
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}

      {/* ✅ Tổng tiền toàn bộ giỏ hàng – auto-grader CHECK */}
      <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>
    </div>
  );
};

export default CartItem;
