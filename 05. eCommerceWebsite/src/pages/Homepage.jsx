import React from "react";
import MiniCard from "../components/MiniCard.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import { dummyProducts } from "../services/productService.js";
import ProductCard from "../components/ProductCard/ProductCard.jsx";

const Homepage = () => {
  if (dummyProducts === null) {
    return <p>Loading...</p>; // Loading state
  }

  if (dummyProducts.length === 0) {
    return <p>Product not found.</p>; // No products found
  }
  return (
    <div>
      <div>
        <div className="mx-40 py-32">
          <MiniCard />
        </div>
      </div>
      <div className="bg-[#EEF3F4]">
        <div className="mx-40 py-32">
          <Testimonial />
        </div>
      </div>
      <div className="bg-white h-screen">
        <div className="container mx-40 py-32 w-full flex flex-wrap">
          {dummyProducts.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
