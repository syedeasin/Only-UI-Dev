import React from "react";
import Button from "../Button.jsx";

const ProductSelecton = ({
  qty,
  handleIncrement,
  handleDecrement,
  handleAddToCart,
}) => {
  return (
    <>
      <div className="cardWrapper border px-10 py-8 mt-2 rounded-lg">
        <h4 className="my-6">Product Details</h4>
        <img
          src="https://audaces.com/wp-content/uploads/2022/12/what-is-a-mix-of-fashion-products.jpg"
          alt="fashion"
          className="rounded-lg"
        />
        <h3 className="mt-6">Winter Ladies Hoodie</h3>
        <p className="mt-4">
          Most Popular winter collections for beautiful ladies, If you are
          beautify feel free to purchase our rich febric hoodie, that will make
          you look gorgious in parties and regular office works.
        </p>
        <h2 className="mt-6">$10.00</h2>
        <div className="button-wrapper flex gap-4 mt-12">
          <div className="product-count flex gap-2 items-center bg-gray-200 px-2.5 rounded-lg">
            <button className="btn-IncDec" onClick={handleIncrement}>
              +
            </button>
            <h4>{qty}</h4>
            <button className="btn-IncDec" onClick={handleDecrement}>
              -
            </button>
          </div>
          <Button className="btn-colorful" onButtonClick={handleAddToCart}>
            Add To Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductSelecton;
