'use client';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';

export default function CustomElevatedPaper({ elevation, children }) {
  const theme = useTheme();
  return (
    <Paper
      elevation={elevation}
      sx={{ backgroundColor: theme.palette.secondary[200] }}
    >
      {children}
    </Paper>
  );
}
