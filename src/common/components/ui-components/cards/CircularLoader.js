import { Box, CircularProgress } from '@mui/material';

export default function CircularLoader({ color }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress color={color} />
    </Box>
  );
}
