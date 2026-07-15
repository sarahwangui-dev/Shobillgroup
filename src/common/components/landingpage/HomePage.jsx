'use client';
import React from 'react';
import Page from '../Page';
import AppBar from './AppBar';
import Herosection from './Herosection';
import { styled } from '@mui/material/styles';

import WhyChooseUs from './WhyChooseUs';
import Footer from './Footer';
import AdCard from './AdCard';
import HomePageAbout from './HomePageAbout';

const HeaderWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  top: '4rem',
  backgroundImage: `url('/windmill.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  color: theme.palette.secondary.main,
  overflowX: 'hidden',
  overflowY: 'clip',
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(4),
    position: 'relative',
    top: theme.spacing(5),

    textAlign: 'center',
    color: theme.palette.white.main,
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/windmill.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflowX: 'hidden',
    overflowY: 'clip'
  }
}));

const SectionWrapper = styled('div')(({ theme }) => ({
  paddingTop: 100,
  overflowX: 'hidden',
  [theme.breakpoints.down('md')]: {
    paddingTop: 60
  }
}));

export default function HomePage() {
  return (
    <Page title="Welcome">
      <HeaderWrapper>
        <AppBar />
        <Herosection />
      </HeaderWrapper>

      <SectionWrapper>
        <WhyChooseUs />
      </SectionWrapper>

      <SectionWrapper>
        <AdCard />
      </SectionWrapper>

      <SectionWrapper>
        <HomePageAbout />
      </SectionWrapper>

      <Footer />
    </Page>
  );
}
