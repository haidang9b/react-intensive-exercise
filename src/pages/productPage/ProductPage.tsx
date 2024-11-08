// src/pages/ProductPage.tsx
import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import ProductList from '../../components/productList/ProductList';
import { useAppDispatch } from '../../hooks/reduxHook';
import { fetchProducts, productsSelector } from '../../redux/productsSlice';
import { useSelector } from 'react-redux';


const ProductPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useSelector(productsSelector);
  useEffect(() => {
    dispatch(fetchProducts())

  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
        Pet Products
      </Typography>
      <ProductList products={products.products} />
    </Container>
  );
};

export default ProductPage;
