import React from "react";

const ProductSelecton = () => {
  return (
    <>
      <div className="cardWrapper border px-10 py-12 mt-8 rounded-lg">
        <h4>Product Details</h4>
        <img
          src="https://audaces.com/wp-content/uploads/2022/12/what-is-a-mix-of-fashion-products.jpg"
          alt="fashion"
          className="rounded-lg mt-6"
        />
        <h3 className="mt-6">Winter Ladies Hoodie</h3>
        <p className="mt-4">
          Most Popular winter collections for beautiful ladies, If you are
          beautify feel free to purchase our rich febric hoodie, that will make
          you look gorgious in parties and regular office works.
        </p>
        <h2 className="mt-6">$213.00</h2>
        <div className="button-wrapper flex gap-4 mt-12">
          <div className="product-count flex gap-2">
            <button className="btn-default">+</button>
            <button className="btn-default">-</button>
          </div>
          <button className="btn-colorful">Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductSelecton;
