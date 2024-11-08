// src/pages/AboutUs.tsx
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';

const AboutUs: React.FC = () => {
  return (
    <Container>
      {/* Introduction Section */}
      <Box textAlign="center" my={5}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          At Pet Shop, we are passionate about providing the best products for your beloved pets. From food and toys to
          accessories, we have everything you need to make your pet’s life comfortable and happy.
        </Typography>
      </Box>

      {/* Mission Statement */}
      <Box my={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography color="textSecondary" paragraph>
          Our mission is to enhance the lives of pets and their owners by offering quality products that keep pets healthy,
          happy, and safe. We are dedicated to supporting pet parents in their journey by providing them with a curated selection
          of trusted, high-quality pet products.
        </Typography>
      </Box>

      {/* Team Section */}
      <Box my={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {/* Sample Team Member */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="/images/about/teammember.jpg"
                alt="Team Member"
              />
              <CardContent>
                <Typography variant="h6">Alex Johnson</Typography>
                <Typography variant="body2" color="textSecondary">
                  Founder & CEO
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Alex is dedicated to promoting pet welfare and has over 15 years of experience in the pet care industry.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="/images/about/teammember2.jpg"
                alt="Team Member"
              />
              <CardContent>
                <Typography variant="h6">Jamie Lee</Typography>
                <Typography variant="body2" color="textSecondary">
                  Product Manager
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Jamie ensures that all our products meet the highest standards for quality and safety.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="/images/about/teammember3.jpg"
                alt="Team Member"
              />
              <CardContent>
                <Typography variant="h6">Taylor Kim</Typography>
                <Typography variant="body2" color="textSecondary">
                  Customer Support
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Taylor is always ready to help pet owners with questions, support, and product recommendations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box textAlign="center" my={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Get in Touch
        </Typography>
        <Typography color="textSecondary" paragraph>
          Have questions or need support? Our team is here to help. Contact us at <a href="mailto:support@petshop.com">support@petshop.com</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
