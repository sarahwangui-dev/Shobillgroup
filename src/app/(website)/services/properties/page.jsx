import React from 'react';
import Page from '@/common/components/Page';
import { Container, Stack, Typography, Box } from '@mui/material';

import PropertyList from './PropertyList';

export default function page() {
  return (
    <Page title="Services">
      <Container maxWidth="xl">
        <Stack direction="column" spacing={2}>
          <Box>
            <Typography
              variant="h2"
              color="secondary"
              align="center"
              gutterBottom
            >
              Property Catalog
            </Typography>

            <Typography variant="subtitle2" color="secondary" align="center">
              Browse through our current listings
            </Typography>
          </Box>

          <PropertyList />
        </Stack>
      </Container>
    </Page>
  );
}
