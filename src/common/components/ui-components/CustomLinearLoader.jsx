import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

export default function CustomLinearLoader({ color }) {
  return (
    <Box>
      <LinearProgress color={color || 'primary'} />
    </Box>
  );
}

CustomLinearLoader.propTypes = {
  color: PropTypes.string
};
