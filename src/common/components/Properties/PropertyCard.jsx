'use client';
import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Divider,
  Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
// import PropertyDialog from '../ui-components/dialog/PropertyDialog';
import { formatPrice } from '@/common/utils/currency';
import SampleImage from '../../../../public/windmill.jpg';
import { builder } from '@/sanity/client';
import { useRouter } from 'next/navigation';

export default function PropertyCard({ property }) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Card
      sx={{ border: `1px solid ${theme.palette.primary[200]}`, maxWidth: 345 }}
    >
      <CardMedia sx={{ minHeight: 200, overflow: 'clip' }}>
        <Image
          src={builder(property?.image)?.width(600)?.url() || SampleImage}
          alt={property?.image?.alt}
          height={200}
          width={400}
          priority
        />
      </CardMedia>
      <Divider />

      <CardContent>
        <Typography gutterBottom variant="h3" component="div" align="center">
          {property?.name}
        </Typography>

        <Stack direction="row" justifyContent="space-between" mb={1}>
          <Typography variant="subtitle1">
            <strong>Location:</strong> {property?.location}
          </Typography>

          <Typography variant="subtitle1">
            <strong>Size in hectares:</strong> {property?.size_in_hectares}
          </Typography>
        </Stack>

        <Typography variant="body1">{property?.excerpt}</Typography>
      </CardContent>

      <Divider variant="middle" />

      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography variant="h5"> {formatPrice(property.price)}</Typography>
        <Button
          size="small"
          variant="contained"
          onClick={() =>
            router.push(
              `/services/properties/detail/${property?.slug?.current}`
            )
          }
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
