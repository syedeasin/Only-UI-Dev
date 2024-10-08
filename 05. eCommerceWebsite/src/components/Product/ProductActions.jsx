// src/components/Product/ProductActions.jsx
import React, { useState } from 'react';

const ProductActions = ({ product, cartDispatch }) => {
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        cartDispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
    };

    return (
        <div className="product-actions">
            <label>Quantity:</label>
            <input
                type="number"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductActions;
