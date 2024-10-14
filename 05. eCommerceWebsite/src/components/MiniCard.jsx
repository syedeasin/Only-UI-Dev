import { useEffect, useState } from "react";

const MiniCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://www.themealdb.com/api/json/v1/1/search.php?f=d")
      .then((response) => response.json())
      .then((res) => setData(res.meals));
  }, []);

  return (
    <div>
      <div className="items-center text-center">
        <h4 className="px-4 py-2 inline bg-red-200 rounded-full text-base font-medium">
          Featured Foods
        </h4>
        <h2 className="mt-5 font-bold text-5xl tracking-tight">
          Our Popular Foods
        </h2>
      </div>
      <div className="flex items-center gap-6 mt-16">
        <div className="grid grid-cols-3 gap-7">
          {data.map((items) => (
            <div key={items.idMeal} className="p-6 bg-gray-100 rounded-lg">
              <img
                src={items.strMealThumb}
                alt="food featured image"
                className="rounded-tl-lg rounded-tr-lg"
              />
              <p className="mt-4 font-light">{items.strCategory}</p>
              <h3 className="text-2xl font-bold capitalize">{items.strMeal}</h3>
              <p className="line-clamp-2 mt-2 text-gray-700">
                {items.strInstructions}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
