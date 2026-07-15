import React from 'react';
import { Typography } from '@mui/material';

export default function CustomParagraph({ color, children }) {
  return (
    <Typography
      color={color}
      sx={{ lineHeight: '28px', fontSize: '14px' }}
      paragraph
    >
      {children}
    </Typography>
  );
}
