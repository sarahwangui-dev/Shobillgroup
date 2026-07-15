'use client';
import { CardContent, Typography } from '@mui/material';
import MainCard from '@/common/components/ui-components/cards/MainCard';

export default function ConsultancyCard({
  icon: IconComponent,
  serviceName,
  description
}) {
  return (
    <MainCard
      title={
        <Typography variant="h3" color="secondary">
          {serviceName}
        </Typography>
      }
      secondary={<IconComponent fontSize="large" color="primary" />}
    >
      <CardContent>
        <Typography paragraph sx={{ lineHeight: '1.9em' }}>
          {description}
        </Typography>
      </CardContent>
    </MainCard>
  );
}
