// src/pages/HomePage.tsx
import React, { useEffect } from 'react';
import { Container, Typography, Grid, Button, Box, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';
import { useAppDispatch } from '../../hooks/reduxHook';
import { useSelector } from 'react-redux';
import { fetchProducts, productsSelector } from '../../redux/productsSlice';

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const products = useSelector(productsSelector);
    useEffect(() => {
      dispatch(fetchProducts())
  
    }, [dispatch]);
  // Select featured products
  const featuredProducts = products.products.slice(0, 4);  // Adjust the number to show more or fewer

  return (
    <Container>
      {/* Welcome Section */}
      <Box textAlign="center" my={5}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Pet Shop
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          The best place to find everything your pets need, from toys to food and accessories!
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/products">
          Shop Now
        </Button>
      </Box>

      {/* Featured Products Section */}
      <Box my={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Categories Section */}
      <Box my={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Shop by Category
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card component={Link} to="/products?category=dog" sx={{ textDecoration: 'none', color: 'inherit' }}>
              <CardMedia
                component="img"
                height="200"
                image="/images/home/dog.webp"
                alt="Dog Category"
              />
              <CardContent>
                <Typography variant="h5" component="h3">
                  Dog Supplies
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card component={Link} to="/products?category=cat" sx={{ textDecoration: 'none', color: 'inherit' }}>
              <CardMedia
                component="img"
                height="200"
                image="/images/home/cat.webp"
                alt="Cat Category"
              />
              <CardContent>
                <Typography variant="h5" component="h3">
                  Cat Supplies
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
