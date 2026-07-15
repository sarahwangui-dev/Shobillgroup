'use client';
import OverviewStatisticCard from '@/common/components/ui-components/cards/OverviewStatisticCard';
import { gridSpacing } from '@/common/utils/constants';
import { Grid, useTheme } from '@mui/material';
import { icons } from '@/common/utils/icons';

const { HomeWorkIcon, HomeRepairServiceIcon, PeopleAltIcon, FeedIcon } = icons;

export default function DashboardOverview() {
  const theme = useTheme();
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={6} md={3}>
        <OverviewStatisticCard
          primary="Properties"
          secondary={20}
          color="#c2912e"
          iconPrimary={<HomeWorkIcon fontSize="small" />}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <OverviewStatisticCard
          primary="Clients"
          secondary={100}
          color={theme.palette.success.main}
          iconPrimary={<PeopleAltIcon fontSize="small" />}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <OverviewStatisticCard
          primary="Property Owners"
          secondary={100}
          color={theme.palette.error.dark}
          iconPrimary={<HomeRepairServiceIcon fontSize="small" />}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <OverviewStatisticCard
          primary="Insights, articles and posts"
          secondary={5}
          color={theme.palette.success.dark}
          iconPrimary={<FeedIcon fontSize="small" />}
        />
      </Grid>
    </Grid>
  );
}
