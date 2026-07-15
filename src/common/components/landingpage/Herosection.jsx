'use client';
import React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';

const HeroContent = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: 650,
  overflowX: 'hidden',
  overflowY: 'hidden',
  [theme.breakpoints.down('sm')]: {
    zIndex: 1,
    top: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: 'center',
    overflowX: 'hidden',
    overflowY: 'clip'
  }
}));

// const HeroForm = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(2),
//   position: 'relative',
//   top: '15rem',
//   overflow: 'hidden',
//   [theme.breakpoints.down('sm')]: {
//     position: 'relative',
//     top: '0.1rem',
//     padding: theme.spacing(2),
//     overflowY: 'clip'
//   }
// }));

export default function Herosection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container maxWidth="xl">
      <HeroContent>
        <Typography
          variant={isSmallScreen ? 'h3' : 'h1'}
          fontSize={isSmallScreen ? 30 : 60}
          gutterBottom
          color="inherit"
        >
          Your Trusted African Business Consultant
        </Typography>
        <Typography
          variant={isSmallScreen ? 'body1' : 'h5'}
          fontSize={isSmallScreen ? '' : 20}
          paragraph
          color="white.main"
        >
          Helping you maneuver through the african business landscape
        </Typography>
      </HeroContent>
      {/* <HeroForm>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <FormControl variant="outlined" color="white" fullWidth>
              <InputLabel htmlFor="location">Location</InputLabel>
              <Select
                label="Location"
                inputProps={{
                  name: 'location',
                  id: 'location'
                }}
              >
                <MenuItem value="anywhere">Anywhere</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl variant="outlined" color="white" fullWidth>
              <InputLabel htmlFor="status">Status</InputLabel>
              <Select
                label="Status"
                inputProps={{
                  name: 'status',
                  id: 'status'
                }}
              >
                <MenuItem value="for-sale">For Sale</MenuItem>
                <MenuItem value="for-rent">For Rent</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl variant="outlined" color="white" fullWidth>
              <InputLabel htmlFor="price-range">Price Range</InputLabel>
              <Select
                label="Price Range"
                inputProps={{
                  name: 'price-range',
                  id: 'price-range'
                }}
              >
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="0-100k">$0 - $100k</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              variant="contained"
              color="primary"
              sx={{ color: theme.palette.white.main, height: '100%' }}
              fullWidth
            >
              Search Listings
            </Button>
          </Grid>
        </Grid>
      </HeroForm> */}
    </Container>
  );
}
