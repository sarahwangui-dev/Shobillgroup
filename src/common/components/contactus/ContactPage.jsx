'use client';
import React from 'react';
import Page from '../Page';
import { Container } from '@mui/material';
import ContactUs from '../ContactUs';

export default function ContactPage() {
  return (
    <Page title="Contact Shobill">
      <Container maxWidth="xl">
        <ContactUs />
      </Container>
    </Page>
  );
}
