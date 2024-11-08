// src/pages/LoginPage.tsx
import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid, Link } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHook';
import { loginUser } from '../../redux/authSlice';
import UserLogin from '../../types/UserLogin';

const LoginPage: React.FC = () => {

  const dispatch = useAppDispatch();

  // Validation schema for login form
  const validationSchema = Yup.object({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string().min(6, 'Password should be at least 6 characters').required('Password is required'),
  });

  // Formik configuration for login
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: UserLogin) => {
      // Handle form submission logic (e.g., login request)
      const result = await dispatch(loginUser(values)).unwrap();
      console.log(result);
    },
  });

  return (
    <Container maxWidth="xs">
      <Box textAlign="center" mt={8} mb={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Please log in to your account
        </Typography>
      </Box>

      {/* Login Form */}
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              required
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Register Link */}
      <Box mt={2} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          Don't have an account?{' '}
          <Link component={RouterLink} to="/register" variant="body2">
            Register here
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
