import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulent", img: "🌱" },
  { id: 2, name: "Snake Plant", price: 15, category: "Succulent", img: "🌿" },
  { id: 3, name: "Cactus", price: 12, category: "Succulent", img: "🌵" },
  { id: 4, name: "Rose", price: 20, category: "Flower", img: "🌹" },
  { id: 5, name: "Tulip", price: 18, category: "Flower", img: "🌷" },
  { id: 6, name: "Lily", price: 22, category: "Flower", img: "🌸" },
  { id: 7, name: "Fern", price: 14, category: "Indoor", img: "🌿" },
  { id: 8, name: "Palm", price: 25, category: "Indoor", img: "🌴" },
  { id: 9, name: "Monstera", price: 30, category: "Indoor", img: "🍃" },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isAdded = id => cartItems.some(i => i.id === id);

  return (
    <div>
      <h2>Plant List</h2>

      {["Succulent", "Flower", "Indoor"].map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          {plants.filter(p => p.category === cat).map(p => (
            <div key={p.id}>
              <span>{p.name} - ${p.price}</span>
              <button
                disabled={isAdded(p.id)}
                onClick={() => dispatch(addToCart(p))}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
