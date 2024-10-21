import { dummyProducts } from "../services/productService";
import ProductCard from "../components/ProductCard/ProductCard.jsx";

const ProductPage = () => {
  return (
    <div>
      <div className="bg-white h-screen pt-32">
        <h2 className="text-center mt-5 font-bold text-5xl tracking-tight">
          Our Featured Products
        </h2>
        <div className="container mx-40 pt-16 pb-32 w-full flex flex-wrap">
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

export default ProductPage;
