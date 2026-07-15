import { Box, Grid, Typography } from '@mui/material';
import DashboardOverview from './overview';
import PropertyTable from '../../Properties/PropertyTable';
import PropertyProvider from '@/app/_providers/PropertyContext';
import PropertyOwnerTable from '../../Properties/owner/PropertyOwnerTable';

export default function AdminDashboard() {
  return (
    <Box>
      <Box sx={{ marginY: 2 }}>
        <Typography variant="h2" color="primary">
          Admin Dashboard
        </Typography>
      </Box>
      <DashboardOverview />
      <Grid container sx={{ marginTop: 4 }} spacing={2}>
        <Grid item xs={12} md={8}>
          <PropertyProvider>
            <PropertyTable minimal={true} />
          </PropertyProvider>
        </Grid>
        <Grid item xs={12} md={4}>
          <PropertyOwnerTable />
        </Grid>
      </Grid>
    </Box>
  );
}
