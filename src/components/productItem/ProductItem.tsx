import React from "react";
import Product from "../../types/Product";

/**
 * ProductItem component renders individual product details.
 * @param {Product} props - The product details to display
 * @returns {JSX.Element} The rendered product item component
 */
const ProductItem: React.FC<Product> = ({ id, name, description, price, imageUrl }: Product) => {
    return (
        <div>
            {/* Render the product name as a heading */}
            <h2>{name}</h2>
            {/* Render the product description */}
            <p>{description}</p>
            {/* Render the product price */}
            <p>{price}</p>
            {/* Render the product image */}
            <img src={imageUrl} alt={name} />
        </div>
    );
}

export default ProductItem; 