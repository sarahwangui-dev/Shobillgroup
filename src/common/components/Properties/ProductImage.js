'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from '@/common/utils/constants';
import MainCard from '../ui-components/cards/MainCard';
import Image from 'next/image';
import { builder } from '@/sanity/client';

export default function ProductImage({ property }) {
  return (
    <>
      <Grid
        // container
        // display={'flex'}
        // alignItems="center"
        // justifyContent="center"
        spacing={gridSpacing}
        // border={'1px solid red'}
      >
        <Grid item xs={12}>
          <MainCard content={false} sx={{ m: '0 auto' }}>
            <Image
              src={builder(property?.image)?.width(600)?.url()}
              width={500}
              height={260}
              alt="Property Image"
              priority
            />
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
}
