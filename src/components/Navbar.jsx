import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <h2>Paradise Nursery</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/plants">Plants</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({totalQty})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
