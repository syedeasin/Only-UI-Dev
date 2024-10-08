// src/components/Product/ProductImage.jsx
import React, { useState } from 'react';

const ProductImage = ({ images }) => {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="product-image">
            <img src={mainImage} alt="Product" className="main-image" />
            <div className="thumbnail-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        className="thumbnail"
                        onClick={() => setMainImage(image)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductImage;
