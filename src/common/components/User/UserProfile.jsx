import React from 'react';
import { gridSpacing } from '@/common/utils/constants';
import { Avatar, Grid, Stack, Typography, TextField } from '@mui/material';
import { icons } from '@/common/utils/icons';

const { ErrorTwoToneIcon } = icons;

export default function UserProfile() {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar alt="User 1" src={'SH'} sx={{ height: 80, width: 80 }} />
          </Grid>
          <Grid item sm zeroMinWidth>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption">
                  <ErrorTwoToneIcon
                    sx={{
                      height: 16,
                      width: 16,
                      mr: 1,
                      verticalAlign: 'text-bottom'
                    }}
                  />
                  Image size Limit should be 125kb Max.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Last Name" defaultValue="Shobill" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="First Name" defaultValue="Group" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Email Address"
          defaultValue="info@shobillgroup.com"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Phone Number"
          defaultValue="07 05 651 500"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Company Name"
          defaultValue="Shobill Group"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Site Information"
          defaultValue="www.shobillgroup.com"
        />
      </Grid>
    </Grid>
  );
}
