'use client';
import React from 'react';
import AppBar from '@/common/components/landingpage/AppBar';
import Footer from '@/common/components/landingpage/Footer';
import { usePathname } from 'next/navigation';

import { styled } from '@mui/material/styles';
import { Breadcrumbs, Container, Link, Typography } from '@mui/material';

const HeaderWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  top: '4rem',
  backgroundImage: `url('/dam_view.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '30vh',
  color: theme.palette.secondary.main,
  overflowX: 'hidden',
  overflowY: 'clip',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 1
  }
}));

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  padding: theme.spacing(1),
  color: 'white'
}));

const ChildrenWrapper = styled('div')(({ theme }) => ({
  paddingTop: 100,
  paddingBottom: 50,
  overflowX: 'hidden',
  // overflowY: 'clip',
  [theme.breakpoints.down('md')]: {
    marginTop: 40,
    paddingTop: 60
  }
}));

export default function WebsitePages({ children }) {
  const pathname = usePathname();

  const breadCrumbItems = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, index, array) => {
      const route = '/' + array.slice(0, index + 1).join('/');

      const text = (() => {
        if (segment === 'about') return 'About Us';
        if (segment === 'services') return '';
        if (segment === 'consulting') return 'Consulting';
        if (segment === 'insights') return 'Insights/ ';
        if (segment === 'services/properties') return 'Properties';
        if (segment === 'services/properties/detail/**') return '';

        return segment.charAt(0).toUpperCase() + segment.slice(1);
      })();

      return (
        <Typography
          key={route}
          component={index === array.length - 1 ? 'span' : Link}
          href={route}
          color={index === array.length - 1 ? 'white' : 'inherit'}
          fontWeight={index === array.length - 1 ? 600 : 700}
          fontSize={index === array.length - 1 ? 15 : 20}
          sx={{
            textDecoration: index === array.length - 1 ? 'none' : 'underline',
            cursor: index === array.length - 1 ? 'default' : 'pointer'
          }}
        >
          {text}
        </Typography>
      );
    });
  return (
    <React.Fragment>
      <HeaderWrapper>
        <AppBar />

        <Container maxWidth="xl">
          <StyledBreadcrumbs>
            <Typography
              component={Link}
              color="white"
              fontWeight={700}
              fontSize={20}
              href="/"
            >
              Home
            </Typography>
            <Typography color="#fffff" fontWeight={600} fontSize={15}>
              {breadCrumbItems}{' '}
            </Typography>
          </StyledBreadcrumbs>
        </Container>
      </HeaderWrapper>

      <ChildrenWrapper>{children}</ChildrenWrapper>

      <Footer />
    </React.Fragment>
  );
}
