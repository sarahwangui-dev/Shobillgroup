import React from 'react';

import { gridSpacing } from '@/common/utils/constants';
import { Container, Grid, Typography } from '@mui/material';
import InsightCard from './InsightCard';
import Page from '@/common/components/Page';
import { defineQuery } from 'next-sanity';

import { sanityFetch } from '@/sanity/live';

const ARTICLE_QUERY = defineQuery(`*[_type == 'article']`);

export default async function InsightsList() {
  const { data: insights } = await sanityFetch({ query: ARTICLE_QUERY });

  return (
    <Page title="Insights, Blogs and Articles">
      <Container maxWidth="lg">
        <Typography variant="h2" color="secondary" align="center" gutterBottom>
          Insights, Blogs and Articles
        </Typography>

        <Grid container spacing={gridSpacing} mt={gridSpacing}>
          {insights.map((insight) => (
            <Grid item xs={12} key={insight.slug}>
              <InsightCard article={insight} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
