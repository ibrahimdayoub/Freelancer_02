import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="52px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '40px', xs: '36px' } }} mb="25px" mt="25px">
      Sweat, Smile and Repeat
    </Typography>
    <Typography fontSize="32px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '250px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '28px', textTransform: 'none', color: 'white', borderRadius: '6px' }}>Explore Exercises</a>
    </Stack>
    <Typography mt="50px" fontWeight={600} color="#FF2625" sx={{opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '150px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
