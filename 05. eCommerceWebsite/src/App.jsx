// src/App.jsx
import React from 'react';
import { CartProvider } from './context/CartContext'; // Ensure correct import path
import ProductPage from './pages/ProductPage';
import ProductCard from "./components/ProductCard/ProductCard.jsx";

const App = () => {
    return (
        // <CartProvider>
        //     <ProductPage productId="1"/>
        // </CartProvider>
        <div className="bg-white h-screen">
            <div className="container mx-40 py-32">
                <ProductCard />
            </div>

        </div>

    );
};

export default App;
