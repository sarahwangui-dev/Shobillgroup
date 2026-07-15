import Page from '@/common/components/Page';
import PropertyDetail from '@/common/components/Properties/PropertyDetail';
import { Container } from '@mui/material';
import React from 'react';
import { client } from '@/sanity/client';
import { notFound } from 'next/navigation';

const getPropertyBySlug = (slug) =>
  `*[_type == "property" && slug.current == "${slug}"][0]`;

export default async function page({ params }) {
  const slug = params.slug;

  const property = await client.fetch(getPropertyBySlug(slug));

  if (!property) {
    notFound();
  }
  return (
    <Page title="Property Detail">
      <Container maxWidth="xl">
        <PropertyDetail property={property} />
      </Container>
    </Page>
  );
}
