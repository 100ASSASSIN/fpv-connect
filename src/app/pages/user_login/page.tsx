'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Paper,
  Grid,
  Box,
} from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    priceLevel: '',
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password || !formData.priceLevel) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error('Invalid email address.');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }

    if (!acceptedTerms) {
      toast.error('Please accept the terms and conditions.');
      return;
    }

    try {
      const res = await fetch('http://127.0.0.1:8000/main/users/v2/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.detail || 'Registration failed.');
        return;
      }

      toast.success('Registration successful!');
      setFormData({ username: '', email: '', password: '', priceLevel: '' });
      setAcceptedTerms(false);
      setTimeout(() => router.push('/'), 1500);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Server error. Please try again.');
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <Navbar />

      {/* Background Video */}
      <Box sx={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source
            src="https://videos.pexels.com/video-files/5803093/5803093-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.6)',
          }}
        />
      </Box>

      {/* Main Form Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          py: 8,
        }}
      >
        <Paper elevation={8} sx={{ maxWidth: 1000, width: '100%', borderRadius: 3, overflow: 'hidden' }}>
          <Grid container sx={{ height: { xs: 'auto', md: 500 } }}>
            {/* Left image */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: 200, md: '100%' },
                  backgroundImage:
                    'url(https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1200)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Grid>

            {/* Right form */}
            <Grid item xs={12} md={6} sx={{ p: 4, backgroundColor: 'white' }}>
              <Typography variant="h5" gutterBottom fontWeight={600}>
                Create Your Account
              </Typography>

              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Username"
                      name="username"
                      fullWidth
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      fullWidth
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      fullWidth
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Price Level"
                      name="priceLevel"
                      fullWidth
                      value={formData.priceLevel}
                      onChange={handleChange}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={acceptedTerms}
                          onChange={handleCheckboxChange}
                          color="primary"
                        />
                      }
                      label="I accept the terms and conditions"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{ py: 1.5 }}
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </form>

              <Typography variant="caption" display="block" align="center" mt={4} color="text.secondary">
                © 2025 FPV Drones. All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Footer />
    </>
  );
}
