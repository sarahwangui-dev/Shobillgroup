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
import SignupForm from './SignupForm';

export default function SignUp() {
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
                <Link href="/">{/* <MuemaAuthLogo /> */}</Link>
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
                          variant={matchDownSM ? 'h3' : 'h2'}
                          fontSize="16px"
                          textAlign={matchDownSM ? 'center' : 'inherit'}
                        >
                          Create an account
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  {/* sign up form component */}
                  <SignupForm />
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
                      href={'/login'}
                      variant="subtitle1"
                      sx={{ textDecoration: 'none' }}
                    >
                      Already have an account?
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
