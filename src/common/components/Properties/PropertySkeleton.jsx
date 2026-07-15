'use client';
import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Skeleton
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function PropertySkeleton() {
  const theme = useTheme();
  return (
    <Card
      sx={{ border: `1px solid ${theme.palette.primary[200]}`, maxWidth: 345 }}
    >
      <CardMedia sx={{ minHeight: 200, overflow: 'clip' }}>
        <Skeleton variant="rounded" height={200} />
      </CardMedia>

      <CardContent>
        <Skeleton variant="rectangular" width="100%" height={60} />
      </CardContent>

      <Divider variant="middle" />

      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={20} />
      </CardActions>
    </Card>
  );
}
