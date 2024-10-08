import React, { useState } from 'react';
import product1 from '../../assets/product1.jpg';
import { FaRegHeart } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";

const ProductCard = () => {
    const [cardHovered, setCardHovered] = useState(false);

    return (
        <div
            className={`card-container group w-1/4 bg-white rounded-2xl transition-all duration-300 ${cardHovered ? 'drop-shadow-2xl scale-105' : ''}`}
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
        >
            <div className={`p-4 transition-transform duration-300 transform`}>
                <div className="card-wrapper">
                    <img src={product1} alt="product one bag" className="rounded-xl" />

                    {/* Product Actions */}
                    <div className={`product-actions flex items-center w-full justify-center gap-3 -mt-14 mb-10 transition-transform duration-300 ${cardHovered ? '-translate-y-0 opacity-100 visible' : 'translate-y-full opacity-0 invisible'}`}>
                        <div className="wishlist p-3 bg-white rounded-full">
                            <FaRegHeart />
                        </div>
                        <div className="add-to-cart p-3 bg-white rounded-full">
                            <GrCart />
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-center">Black Bottle Small</h3>
                    <p className="text-[16px] font-semibold text-center mt-1 text-[#E46319] pb-3">
                        $32.00 <span className="text-gray-500 line-through">$36.00</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
