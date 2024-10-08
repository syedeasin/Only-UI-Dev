// src/components/Product/ProductDescription.jsx
import React from 'react';

const ProductDescription = ({ description }) => {
    return (
        <div className="product-description">
            <h2>Description</h2>
            <p>{description}</p>
        </div>
    );
};

export default ProductDescription;
