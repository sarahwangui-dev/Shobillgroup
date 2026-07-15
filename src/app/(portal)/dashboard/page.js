import React from 'react';
import { Container } from '@mui/material';
import AdminDashboard from '@/common/components/admin/dashboard';

export default function page() {
  return (
    <Container maxWidth="xl">
      <AdminDashboard />
    </Container>
  );
}
