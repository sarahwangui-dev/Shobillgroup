'use client';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import config from '@/common/utils/config';
import theme from '@/common/theme';

export default function MUIProvider({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(config)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
