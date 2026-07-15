'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import {
  Container,
  Grid,
  Stack,
  Typography,
  Box,
  Link,
  Button
} from '@mui/material';
import { icons } from '@/common/utils/icons';

const ArrowForwardIcon = icons.ArrowForwardIcon;

const DottedBackgroundBox = styled(Box)(() => ({
  position: 'relative',
  display: 'inline-block',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
    backgroundImage: 'radial-gradient(circle, black 1px, transparent 0.5px)',
    backgroundSize: '5px 5px',
    zIndex: -1
  }
}));

const Item = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  height: 500,
  borderRadius: '10px',
  overflow: 'hidden'
}));

export default function SuccessSection() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Stack direction="column" spacing={2}>
            <DottedBackgroundBox>
              <Typography variant="h1" color="secondary" paddingTop={2}>
                Our Expertise, Your Success
              </Typography>
            </DottedBackgroundBox>

            <Item>
              <Image src="/expertise.png" fill={true} alt="Shobill Image" />
            </Item>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Stack direction="column" spacing={2}>
            <Item>
              <Image
                src="/expertise_description.png"
                fill={true}
                alt="Shobill Image"
              />
            </Item>

            <Box>
              <Typography
                variant="body2"
                sx={{ lineHeight: '1.75em', fontSize: '1.125em' }}
                paragraph
              >
                We specialize in finding the perfect piece of land that aligns
                with your vision. Our team conducts thorough site analysis,
                navigates complex zoning regulations, and negotiates on your
                behalf to secure prime land for your development projects. With
                our guidance, your land investment will yield the best returns.
              </Typography>

              <Typography
                variant="body2"
                sx={{ lineHeight: '1.75em', fontSize: '1.125em' }}
                paragraph
              >
                Whether you&apos;re buying or selling a home, we simplify the
                process. Our extensive portfolio of listings showcases premium
                properties in sought-after locations. For sellers, our marketing
                prowess ensures maximum exposure and swift transactions. For
                buyers, we&apos;re your trusted advisors, guiding you towards
                the perfect home investment.
              </Typography>

              <Button
                component={Link}
                color="primary"
                sx={{ paddingLeft: 0 }}
                endIcon={<ArrowForwardIcon />}
              >
                Browse Listings
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
