'use client';

import { Paper, Button, Typography, Box, Stack } from '@mui/material';

//Update with reset
export default function Error({ error }) {
  return (
    <div className="auth_background">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <Paper sx={{ p: 3 }} elevation={3}>
          <Typography variant="h3" color="primary" gutterBottom>
            Oops! Something went wrong
          </Typography>
          <Stack direction="column" spacing={2}>
            <Typography variant="body2" color="red" align="center">
              {error.message}
            </Typography>
            <Button variant="contained">Refresh page</Button>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
}
