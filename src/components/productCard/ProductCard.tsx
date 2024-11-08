import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Product from '../../types/Product';
import { Link } from 'react-router-dom';  // Import Link for routing

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}> {/* Use product ID for the link */}
        <Card sx={{ maxWidth: 345, margin: 'auto', cursor: 'pointer' }}>
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {product.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                WebkitLineClamp: 2, // Limit to 2 lines
              }}
            >
              {product.description}
            </Typography>
            <Typography variant="subtitle1" color="text.primary" fontWeight="bold">
              ${product.price.toFixed(2)}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    );
  };
  
export default ProductCard;
