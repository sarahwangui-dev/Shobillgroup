import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import ProfileSection from './ProfileSection';
import ShobillBlackLogoTag from '@/common/utils/logos/ShobillBlackLogoTag';

export default function PortalHeader() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box
        sx={{
          width: 228,
          display: 'flex',
          alignItems: 'center',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: 'block', md: 'block' }, flexGrow: 1 }}
        >
          <ShobillBlackLogoTag height={60} width={100} />
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <ProfileSection />
    </React.Fragment>
  );
}
