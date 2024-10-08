// src/pages/ProductPage.jsx
import React, { useContext, useEffect, useState } from 'react';
import { fetchProductData } from '../services/productService';
import CartContext from '../context/CartContext';
import ProductCard from "../components/ProductCard/ProductCard.jsx";

const ProductPage = ({ productId }) => {
    const { cartDispatch } = useContext(CartContext); // Check that CartContext provides cartDispatch
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            const fetchedProduct = await fetchProductData(productId);
            setProduct(fetchedProduct);
        };

        getProduct();
    }, [productId]);

    if (!product) return <div>Loading...</div>;

    const handleAddToCart = () => {
        if (cartDispatch) {
            cartDispatch({ type: 'ADD_TO_CART', payload: product });
        } else {
            console.error("cartDispatch function is not available in CartContext");
        }
    };

    return (
        <div>
            {/*<h1>{product.name}</h1>*/}
            {/*<p>{product.description}</p>*/}
            {/*<p>Price: ${product.price.toFixed(2)}</p>*/}
            {/*<img src={product.imageUrl} alt={product.name} width="200" />*/}
            {/*<button onClick={handleAddToCart}>Add to Cart</button>*/}
            <ProductCard/>
        </div>
    );
};

export default ProductPage;
