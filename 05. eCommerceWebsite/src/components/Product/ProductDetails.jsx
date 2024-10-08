// src/components/Product/ProductDetails.jsx
import React from 'react';

const ProductDetails = ({ product }) => {
    return (
        <div className="product-details">
            <h1>{product.name}</h1>
            <p className="product-price">${product.price}</p>
            <div className="product-options">
                {product.options && product.options.map((option, index) => (
                    <div key={index} className="product-option">
                        <label>{option.label}</label>
                        <select>
                            {option.values.map((value, i) => (
                                <option key={i} value={value}>{value}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetails;
