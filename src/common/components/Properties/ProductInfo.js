import React from 'react';
import {
  // Avatar,
  // Button,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import { PortableText } from '@portabletext/react';
// import { icons } from '@/common/utils/icons';

// const { FavoriteBorderIcon } = icons;

import { formatPrice } from '@/common/utils/currency';
import InitiateConsultationDialog from '../ui-components/dialog/InitiateConsultationDialog';

export default function ProductInfo({ property }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Chip
                size="small"
                label={'Available'}
                sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="h3">{property?.name}</Typography>
                <Chip
                  size="small"
                  label="New"
                  color="primary"
                  variant="outlined"
                />
              </Stack>
            </Grid>
          </Grid>
          {/* <Avatar
            variant="rounded"
            sx={{ bgcolor: 'grey.200', color: 'grey.800' }}
          >
            <FavoriteBorderIcon />
          </Avatar> */}
        </Stack>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h4">Location: </Typography>
        <Typography variant="caption"> {property?.location}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h4">Size in Ha: </Typography>
        <Typography variant="caption">{property?.size_in_hectares}</Typography>
      </Grid>

      <Grid item xs={12}>
        <PortableText value={property?.description} />
      </Grid>

      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h2" color="primary">
            {formatPrice(property?.price)}
          </Typography>
          {/* <Typography variant="body1" sx={{ textDecoration: 'line-through' }}>
            KES 450, 000
          </Typography> */}
          <Typography variant="caption">(Inclusive of all taxes)</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={1} mt={1}>
          <Grid item xs={12}>
            {/* <Button variant="contained" color="secondary" fullWidth>
              Initiate Consultation
            </Button> */}

            <InitiateConsultationDialog property={property} />
          </Grid>
          {/* <Grid item xs={6}>
            <Button variant="contained" color="primary" fullWidth>
              Purchase Now
            </Button>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
