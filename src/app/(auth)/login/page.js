'use client';
import React from 'react';
import AuthCardWrapper from '../auth-wrapper/AuthCardWrapper';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';
import LoginForm from './LoginForm';
import ShobillGroupLogo from '@/common/utils/logos/ShobillGroupLogo';

export default function Login() {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: 'calc(100vh - 68px)' }}
        >
          <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
            <Grid item xs={12}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="3em"
              >
                <Link href="/">
                  <ShobillGroupLogo width={100} height={60} />
                </Link>
              </Box>
            </Grid>
            <AuthCardWrapper>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12}>
                  <Grid
                    container
                    direction={matchDownSM ? 'column-reverse' : 'row'}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item>
                      <Stack
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                      >
                        <Typography
                          color={theme.palette.primary.main}
                          gutterBottom
                          variant={matchDownSM ? 'h3' : 'h2'}
                        >
                          Hi, Welcome Back
                        </Typography>
                        <Typography
                          variant="caption"
                          fontSize="16px"
                          textAlign={matchDownSM ? 'center' : 'inherit'}
                        >
                          {' '}
                          Enter your credentials to continue
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  {/* login form component */}
                  <LoginForm />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems="center"
                    xs={12}
                  >
                    <Typography
                      component={Link}
                      href={'/signup'}
                      variant="subtitle1"
                      sx={{ textDecoration: 'none' }}
                    >
                      {' '}
                      Don&apos;t have an account?
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </AuthCardWrapper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
