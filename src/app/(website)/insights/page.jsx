import Page from '@/common/components/Page';
import { Container } from '@mui/material';
import React from 'react';
import InsightsList from './InsightsList';

export default function page() {
  return (
    <Page title="Insights">
      <Container maxWidth="xl">
        <InsightsList />
      </Container>
    </Page>
  );
}
