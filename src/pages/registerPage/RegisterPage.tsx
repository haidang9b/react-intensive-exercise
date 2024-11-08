import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid, Alert } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '../../hooks/reduxHook';
import UserRegister from '../../types/UserRegister';
import { registerUser } from '../../redux/authSlice';

const RegisterPage: React.FC = () => {
  const [registerError, setRegisterError] = React.useState<string | null>(null);

  const dispatch = useAppDispatch();
  // Validation schema for registration form
  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Name should be at least 2 characters').required('Name is required'),
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password should be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      .required('Confirm password is required'),
  });

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: UserRegister) => {
      
      var result = await dispatch(registerUser(values)).unwrap();
      // Handle form submission logic, e.g., call an API to register the user.
      // This example simply shows a success message for demonstration.
      setRegisterError(null); // Reset any previous error messages
      console.log('Form values:', result);
      alert('Registration successful!');
      formik.resetForm();
    },
  });

  return (
    <Container maxWidth="xs">
      <Box textAlign="center" mt={8} mb={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Create your account to get started
        </Typography>
      </Box>

      {/* Registration Form */}
      <Box component="form" onSubmit={formik.handleSubmit}>
        {registerError && (
          <Alert severity="error" onClose={() => setRegisterError(null)}>
            {registerError}
          </Alert>
        )}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              required
            />
          </Grid>
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
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              variant="outlined"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              required
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Register
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default RegisterPage;
