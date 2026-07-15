'use client';

import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import {
  Container,
  Divider,
  Grid,
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Typography,
  Stack,
  IconButton,
  Tooltip
} from '@mui/material';
import Link from 'next/link';
import { icons } from '@/common/utils/icons';

const { LinkedInIcon, FacebookIcon, PlayCircleOutlineIcon } = icons;

const FooterWrapper = styled('div')(({ theme }) => ({
  padding: '35px',
  color: 'secondary',
  background: theme.palette.background.paper
}));

const FooterSubWrapper = styled('div')(({ theme }) => ({
  padding: '20px 0',
  background: theme.palette.background.default,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  }
}));

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <Fragment>
      <FooterWrapper>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="body1" gutterBottom>
                <strong>Email:</strong> info@shobillgroup.com
              </Typography>

              <Typography variant="body1" gutterBottom>
                <strong>Location:</strong> Delta Corner, Ring Road Westlands
                Lane, Nairobi Kenya
              </Typography>

              <Typography variant="body1" gutterBottom>
                <strong>Phone Number:</strong> +254 792 029 798
              </Typography>

              <Typography variant="body2">
                Connect with us on our socials
              </Typography>

              <Stack direction="row" gap={1}>
                <IconButton href="https://www.linkedin.com/company/shobill-group/">
                  <Tooltip title="Follow us on LinkedIn" target="_blank">
                    <LinkedInIcon />
                  </Tooltip>
                </IconButton>
                <IconButton
                  href="https://www.facebook.com/share/15zikE5b1o/"
                  target="_blank"
                >
                  <Tooltip title="Find us on Facebook">
                    <FacebookIcon />
                  </Tooltip>
                </IconButton>

                <IconButton
                  href="https://www.tiktok.com/@shobillgroup?_t=ZM-8y2ixbCal2E&_r=1"
                  target="_blank"
                >
                  <Tooltip title="Explore our TikTok">
                    <PlayCircleOutlineIcon />
                  </Tooltip>
                </IconButton>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Grid container spacing={3}>
                <Grid item sm={4} md={4} lg={4}>
                  <List
                    subheader={
                      <ListSubheader component="div">Services</ListSubheader>
                    }
                  >
                    <ListItemButton href="/services/consulting">
                      <ListItemText primary="Consultancy" />
                    </ListItemButton>
                    <ListItemButton href="/services/properties">
                      <ListItemText primary="Properties" />
                    </ListItemButton>
                    <ListItemButton href="/insights">
                      <ListItemText primary="Insights" />
                    </ListItemButton>
                  </List>
                </Grid>

                <Grid item sm={4} md={4} lg={4}>
                  <List
                    subheader={
                      <ListSubheader component="div">Information</ListSubheader>
                    }
                  >
                    <ListItemButton href="/about">
                      <ListItemText primary="About Us" />
                    </ListItemButton>
                    <ListItemButton href="/contact">
                      <ListItemText primary="Contact Us" />
                    </ListItemButton>

                    <ListItemButton href="/login">
                      <ListItemText primary="Staff Portal" />
                    </ListItemButton>
                  </List>
                </Grid>

                <Grid item sm={4} md={4} lg={4}>
                  <List
                    subheader={
                      <ListSubheader component="div">Legal</ListSubheader>
                    }
                  >
                    <ListItemButton>
                      <ListItemText primary="Privacy Policy" />
                    </ListItemButton>
                    {/* <ListItemButton>
                      <ListItemText primary="Cookie Policy" />
                    </ListItemButton> */}
                    <ListItemButton>
                      <ListItemText primary="Legal Terms" />
                    </ListItemButton>
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </FooterWrapper>

      <Divider />
      <Container maxWidth="xl">
        <FooterSubWrapper>
          <Typography variant="subtitle2" color="inherit">
            &#169; Copyright {year} - All rights reserved.
          </Typography>
          <Typography variant="subtitle2" color="inherit">
            Design, built and maintained by{' '}
            <Link href="https://github.com/kimperria" target="_blank">
              <Typography
                component="span"
                color="inherit"
                fontWeight={200}
                fontSize="small"
              >
                Kimperria
              </Typography>
            </Link>
          </Typography>
        </FooterSubWrapper>
      </Container>
    </Fragment>
  );
}
