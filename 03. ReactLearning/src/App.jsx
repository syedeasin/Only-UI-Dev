import ProductSelecton from "./components/ProductShopping/ProductSelecton.jsx";
import ProductCart from "./components/ProductShopping/ProductCart.jsx";
import { useState } from "react";

export default function App() {
  const pricePerItem = 10;
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(pricePerItem);
  const [cartQty, setCardQty] = useState(1);

  function handleIncrement() {
    const newQty = qty + 1;
    setQty(newQty);
  }

  function handleDecrement() {
    const newQty = qty - 1;
    setQty(newQty);
  }

  function handleAddToCart() {
    setTotalPrice(pricePerItem * qty);
    setCardQty(qty);
  }

  return (
    <>
      <div className="container mx-40">
        <div className="product-wrapper flex items-start gap-8">
          <div className="product-selection flex-1 w-1/2">
            <ProductSelecton
              qty={qty}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleAddToCart={handleAddToCart}
            />
          </div>
          <div className="product-cart flex-1 w-1/2">
            <ProductCart qty={cartQty} totalPrice={totalPrice} />
          </div>
        </div>
        {/*<ClickCount />*/}
        {/*<Toolbar*/}
        {/*  onPlayMovie={() => alert("Playing Movie")}*/}
        {/*  onPlayVideo={() => alert("Playing Video")}*/}
        {/*/>*/}
        {/*<div className="wrapper flex items-start gap-8">*/}
        {/*  <div className="product-selection flex-1 w-1/2">*/}
        {/*    <CallStatus />*/}
        {/*  </div>*/}
        {/*  <div className="product-selection flex-1 w-1/2">*/}
        {/*    <CallSummery />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </>
  );
}
