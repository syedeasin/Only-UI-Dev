export const fetchProductData = async (productId) => {
    try {
        // Dummy product data for testing
        const dummyProducts = {
            '1': {
                id: '1',
                name: 'Smartphone XL',
                description: 'A large smartphone with a vibrant display and powerful features.',
                price: 799.99,
                imageUrl: '../../assets/product1.jpg',
            },
            '2': {
                id: '2',
                name: 'Laptop Pro 15',
                description: 'A powerful laptop with a sleek design, perfect for professionals.',
                price: 1299.99,
                imageUrl: '/images/laptop-pro-15.jpg',
            },
            '3': {
                id: '3',
                name: 'Wireless Headphones',
                description: 'Noise-canceling headphones with superior sound quality.',
                price: 199.99,
                imageUrl: '/images/wireless-headphones.jpg',
            },
        };

        // Simulate an async API call with a slight delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Check if the product exists in the dummy data
        if (!dummyProducts[productId]) {
            throw new Error("Product not found");
        }

        return dummyProducts[productId];
    } catch (error) {
        console.error("Error fetching product data:", error);
        return null;
    }
};
