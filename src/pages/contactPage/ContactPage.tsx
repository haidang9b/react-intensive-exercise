// src/pages/ContactPage.tsx
import React from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Alert } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  // Validation schema for form fields using Yup
  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Name should be at least 2 characters').required('Name is required'),
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    message: Yup.string().min(10, 'Message should be at least 10 characters').required('Message is required'),
  });

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Here you can add code to handle form submission, e.g., send the data to a backend server.
      setFormSubmitted(true);
      formik.resetForm();
    },
  });

  return (
    <Container>
      <Box textAlign="center" my={5}>
        <Typography variant="h2" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Have any questions or need support? Get in touch with us!
        </Typography>
      </Box>

      {/* Contact Information */}
      <Box my={5} textAlign="center">
        <Typography variant="body1" color="textSecondary">
          <strong>Email:</strong> support@petshop.com
        </Typography>
        <Typography variant="body1" color="textSecondary">
          <strong>Phone:</strong> +1 (123) 456-7890
        </Typography>
      </Box>

      {/* Contact Form */}
      <Box component="form" onSubmit={formik.handleSubmit} maxWidth="sm" mx="auto">
        {formSubmitted && (
          <Alert severity="success" onClose={() => setFormSubmitted(false)}>
            Your message has been sent. We will get back to you soon!
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
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              required
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactPage;
