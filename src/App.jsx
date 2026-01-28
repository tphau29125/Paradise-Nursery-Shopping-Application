import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStartedClick = () => {
    setShowProducts(true);
  };

  return (
    <div className="background-image">
      {!showProducts ? (
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p>Discover a wide variety of beautiful and healthy plants.</p>

          <button onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
