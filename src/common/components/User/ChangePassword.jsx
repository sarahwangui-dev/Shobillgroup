import React from 'react';

import { gridSpacing } from '@/common/utils/constants';
import { Grid, TextField, Stack, Button } from '@mui/material';

export default function ChangePassword() {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={6}>
        <TextField
          type="password"
          fullWidth
          label="Current Password"
          defaultValue="Selfing Listel"
        />
      </Grid>
      <Grid item xs={12} sm={6} />
      <Grid item xs={12} sm={6}>
        <TextField
          type="password"
          fullWidth
          label="New Password"
          defaultValue=" 30529399"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          type="password"
          fullWidth
          label="Confirm Password"
          defaultValue="395005"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack direction="row">
          <Button variant="outlined" size="large">
            Change Password
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
