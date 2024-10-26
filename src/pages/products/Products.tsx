import React from "react";
import ProductItem from "../../components/productItem/ProductItem";

const products = [
    { 
      id: 1, 
      name: 'Product 1', 
      description: 'This is product 1', 
      price: 10, 
      imageUrl: 'https://via.placeholder.com/150' 
    },
    { 
      id: 2, 
      name: 'Product 2', 
      description: 'This is product 2', 
      price: 20, 
      imageUrl: 'https://via.placeholder.com/150' 
    },
    { 
      id: 3, 
      name: 'Product 3', 
      description: 'This is product 3', 
      price: 30, 
      imageUrl: 'https://via.placeholder.com/150' 
    }
];

const Products: React.FC = () => {
    return (
        <div>
            <h1>Products</h1>

            {products.map(product => (
                <ProductItem key={product.id} {...product} />
            ))}

        </div>
    )
}

export default Products;