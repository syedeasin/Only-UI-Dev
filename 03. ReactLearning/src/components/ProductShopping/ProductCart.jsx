import React from "react";

const ProductCart = ({ qty, totalPrice }) => {
  return (
    <>
      <div className="cardWrapper border px-10 py-8 mt-2 rounded-lg">
        <h4 className="my-6">Product Cart</h4>
        <div className="product-details flex justify-between items-center gap-4">
          <div className="productImage w-1/6">
            <img
              src="https://audaces.com/wp-content/uploads/2022/12/what-is-a-mix-of-fashion-products.jpg"
              alt="building"
              className="rounded-lg"
            />
          </div>
          <div className="productDetails w-2/3">
            <h3 className="text-lg">Winter Ladies Hoodie</h3>
            <h2 className="text-2xl mt-1">${totalPrice}</h2>
          </div>
          <div className="productTotalPrice w-1/12">
            <h2 className="text-2xl">{qty}</h2>
          </div>
        </div>
        <div className="btn-checkout flex mt-4">
          <button className="btn-colorful flex-1">Procced To Checkout</button>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
