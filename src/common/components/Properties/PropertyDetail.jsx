'use client';
import {
  Grid,
  Card,
  Typography,
  CardHeader,
  Button,
  CardContent
} from '@mui/material';
import React from 'react';
import ProductInfo from './ProductInfo';
import Page from '../Page';
import ProductImage from './ProductImage';
import { icons } from '@/common/utils/icons';
import { useRouter } from 'next/navigation';
const { ArrowBackIcon } = icons;

export default function PropertyDetail({ property }) {
  const router = useRouter();

  return (
    <Page title="Property Details">
      <Grid container alignItems="center" justifyContent="center" spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" color="secondary" align="center">
            Property Details
          </Typography>
        </Grid>
        <Grid item xs={12} lg={10}>
          <Card>
            <CardHeader
              title={
                <Button
                  onClick={() => router.back()}
                  startIcon={<ArrowBackIcon />}
                >
                  Go Back
                </Button>
              }
            />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <ProductImage property={property} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ProductInfo property={property} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* <Grid item xs={12} lg={10} sx={{ mt: 3 }}>
          <Typography variant="h2">Related Products</Typography>{' '}
        </Grid> */}
      </Grid>
    </Page>
  );
}
