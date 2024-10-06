import ClickCount from "./components/ClickCount.jsx";
import Toolbar from "./components/Toolbar.jsx";
import CallStatus from "./components/Card/CallStatus.jsx";
import CallSummery from "./components/Card/CallSummery.jsx";
import ProductSelecton from "./components/ProductShopping/ProductSelecton.jsx";
import ProductCart from "./components/ProductShopping/ProductCart.jsx";

export default function App() {
  return (
    <>
      <div className="container mx-40">
        <ClickCount />
        <Toolbar
          onPlayMovie={() => alert("Playing Movie")}
          onPlayVideo={() => alert("Playing Video")}
        />
        <div className="wrapper flex items-start gap-8">
          <div className="product-selection flex-1 w-1/2">
            <CallStatus />
          </div>
          <div className="product-selection flex-1 w-1/2">
            <CallSummery />
          </div>
        </div>
        <div className="product-wrapper flex items-start gap-8 mt-16">
          <div className="product-selection flex-1 w-1/2">
            <ProductSelecton />
          </div>
          <div className="product-cart flex-1 w-1/2">
            <ProductCart />
          </div>
        </div>
      </div>
    </>
  );
}
