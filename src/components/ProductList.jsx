import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

const plants = {
  indoor: [
    { id: 1, name: "Snake Plant", price: 15, image: "src/assets/Snake Plant.jpg" },
    { id: 2, name: "Peace Lily", price: 18, image: "src/assets/Peace Lily.jpg" },
    { id: 3, name: "Aloe Vera", price: 12, image: "src/assets/Aloe Vera.jpg" },
    { id: 4, name: "ZZ Plant", price: 20, image: "src/assets/ZZ Plant.jpg" },
    { id: 5, name: "Spider Plant", price: 10, image: "src/assets/Spider Plant.jpg" },
    { id: 6, name: "Pothos", price: 14, image: "src/assets/Pothos.jpg" }
  ],
  outdoor: [
    { id: 7, name: "Rose", price: 25, image: "src/assets/Rose.jpg" },
    { id: 8, name: "Lavender", price: 22, image: "src/assets/Lavender.jpg" },
    { id: 9, name: "Hibiscus", price: 20, image: "src/assets/Hibiscus.jpg" },
    { id: 10, name: "Jasmine", price: 18, image: "src/assets/Jasmine.jpg" },
    { id: 11, name: "Tulip", price: 16, image: "src/assets/Tulip.jpg" },
    { id: 12, name: "Sunflower", price: 14, image: "src/assets/Sunflower.jpg" }
  ]
};

 const isAddedToCart = (id) =>
    cartItems.some((item) => item.id === id);

  return (
    <div className="product-list">
      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h2>{category.toUpperCase()} PLANTS</h2>

          <div className="plant-grid">
            {plants[category].map((plant) => (
              <div className="plant-card" key={plant.id}>
                {/* ✅ Thumbnail image */}
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />

                <h4>{plant.name}</h4>
                <p>Price: ${plant.price}</p>

                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isAddedToCart(plant.id)}
                >
                  {isAddedToCart(plant.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
