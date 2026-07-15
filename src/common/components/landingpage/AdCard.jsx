'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { icons } from '@/common/utils/icons';
import CustomElevatedPaper from '../ui-components/CustomElevatedPaper';

const AdWrapper = styled('section')(({ theme }) => ({
  padding: theme.spacing(3),
  overflow: 'hidden'
}));

const properties = [
  {
    icon: icons.HouseIcon,
    propertyName: 'PROPERTY DEVELOPMENT CONSULTATION ',
    description: `It could be difficult to navigate the complicated world of real estate development. From determining the best use for a land, knowing which demographic you should target with your project, to handling various approvals, or even figuring out which kind of real estate is performing well in the market. From the beginning to the end, we accompany you every step of the way and offer you tested tactics and advice to make sure your project is a success.`
  },
  {
    icon: icons.WindPowerIcon,
    propertyName: 'RENEWABLE ENERGY POWER GENERATION ',
    description:
      'Since adoption of the Paris Agreement on 2nd Dec 2015, the world has been shifting more towards renewable energy sources. And Africa is not being left behind in this shift. The treaty came at a very critical time as our industries and population are expanding quickly and driving up the demand for electricity. '
  },
  {
    icon: icons.CurrencyExchangeIcon,
    propertyName: 'PROJECT FUNDING',
    description:
      'Coming to a financial close for your project can double the challenge of being a project owner. To make your life easier, throughout the course of the years our team has cultivated partnerships with family offices, development banks, investment firms, and other organizations that aim to finance initiatives in Africa throughout the course of the years. Every one of them has its own qualifications and funding programs.'
  },
  {
    icon: icons.LocationCityIcon,
    propertyName: 'PROPERTY ACQUISITION & CONVEYANCING',
    description:
      'The journey of acquiring property has never been simple. From selecting a property, making decisions to the incredibly time-consuming conveyancing process. We take satisfaction applying processes that we established and redefined over the years from serving other clients. Assisting them in making appropriate decisions within the predetermined timeframes..'
  },
  {
    icon: icons.EngineeringIcon,
    propertyName: 'MINERAL SOURCING',
    fullWidth: true,
    description: `With an extensive network of miners and traders across Africa, we specialize in sourcing a wide range of high-quality minerals, including zinc, copper, lead, nickel, cobalt, and more. Our team combines deep industry expertise with local insights to provide tailored solutions for your mineral needs. We don’t just connect you to the right resources—we work as your strategic partner, ensuring every aspect of the sourcing process aligns with your business objectives. From identifying the exact mineral specifications you require to negotiating favorable terms on your behalf, our commitment is to deliver efficiency, reliability, and value.`
  }
];

const PropertyCard = ({ icon: IconComponent, propertyName, description }) => {
  return (
    <Stack spacing={2}>
      <IconComponent fontSize="medium" color="primary" />
      <Typography variant="h4" color="secondary">
        {propertyName}
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: '1.9em' }}>
        {description}
      </Typography>
      {/* <Stack sx={{ maxWidth: '10rem' }}>
        <Button variant="contained" size="small">
          Learn More
        </Button>
      </Stack> */}
    </Stack>
  );
};

export default function AdCard() {
  return (
    <Container maxWidth="xl" sx={{ padding: 2 }}>
      <CustomElevatedPaper elevation={3}>
        <AdWrapper>
          <Container maxWidth="xl">
            <Typography variant="h1" color="secondary" gutterBottom>
              Areas of specialty
            </Typography>
            <Grid container spacing={3}>
              {properties.map((property, index) => (
                <Grid item sm={12} md={property.fullWidth ? 12 : 6} key={index}>
                  <PropertyCard
                    icon={property.icon}
                    propertyName={property.propertyName}
                    description={property.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </AdWrapper>
      </CustomElevatedPaper>
    </Container>
  );
}
