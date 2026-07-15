// 'use client';
import React, { Fragment } from 'react';
import { Grid } from '@mui/material';
import PropertyCard from '@/common/components/Properties/PropertyCard';
// import { useGetPropertiesQuery } from '@/common/store/rootApi';
// import PropertySkeleton from '@/common/components/Properties/PropertySkeleton';
// import CustomLinearLoader from '@/common/components/ui-components/CustomLinearLoader';
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/live';

const PROPERTY_QUERY = defineQuery(`*[_type == "property"]`);

export default async function PropertyList() {
  // const { data, isError, isFetching, isSuccess, error } =
  //   useGetPropertiesQuery();

  const { data } = await sanityFetch({ query: PROPERTY_QUERY });

  return (
    <Grid container spacing={1}>
      {/* <Grid item xs={12}>
        {isError && <Alert severity="error">{error?.data}</Alert>}
      </Grid> */}

      {/* <Grid item xs={12}>
        {isFetching && (
          <Stack direction="column" spacing={2}>
            <Alert severity="info">Fetching properties. Please wait...</Alert>

            <CustomLinearLoader color="primary" />

            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <PropertySkeleton />
              </Grid>
              <Grid item xs={12} md={3}>
                <PropertySkeleton />
              </Grid>
              <Grid item xs={12} md={3}>
                <PropertySkeleton />
              </Grid>
              <Grid item xs={12} md={3}>
                <PropertySkeleton />
              </Grid>
            </Grid>
          </Stack>
        )}
      </Grid> */}

      {data && (
        <Fragment>
          {data.map((property, index) => (
            <Grid item xs={12} md={3} key={index}>
              <PropertyCard property={property} />
            </Grid>
          ))}
        </Fragment>
      )}
    </Grid>
  );
}
