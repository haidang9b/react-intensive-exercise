// src/pages/ProductDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardMedia, Button } from '@mui/material';
import Product from '../../types/Product';
import { useProducts } from '../../hooks/useProduct';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>();
 const {getProductById} = useProducts()
  useEffect(() => {
    const productId = Number(id);
    getProductById(productId)
    .then((response) => {
        console.log(response);
        return response.data;
    })
    .then((data) => setProduct(data))
    .catch((error) => console.error('Error fetching product:', error));
  }, []);

  if (!product) {
    return (
      <Container>
        <Typography variant="h5" component="h2" textAlign="center" marginTop="2rem">
          Product not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={4} marginTop="2rem">
        {/* Product Image */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </Card>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
