import React from 'react';
import Page from '@/common/components/Page';
import { Container, Grid, Typography } from '@mui/material';
import { gridSpacing } from '@/common/utils/constants';
import ConsultancyCard from './ConsultancyCard';
import { icons } from '@/common/utils/icons';

export const consultancy_services = [
  {
    icon: icons.EngineeringIcon,
    serviceName: 'MINERAL SOURCING',
    fullWidth: true,
    description: `With an extensive network of miners and traders across Africa, we specialize in sourcing a wide range of high-quality minerals, including zinc, copper, lead, nickel, cobalt, and more. Our team combines deep industry expertise with local insights to provide tailored solutions for your mineral needs. We don’t just connect you to the right resources—we work as your strategic partner, ensuring every aspect of the sourcing process aligns with your business objectives. From identifying the exact mineral specifications you require to negotiating favorable terms on your behalf, our commitment is to deliver efficiency, reliability, and value.`
  },
  {
    icon: icons.HouseIcon,
    serviceName: 'PROPERTY DEVELOPMENT CONSULTATION ',
    description: `It could be difficult to navigate the complicated world of real estate development. From determining the best use for a land, knowing which demographic you should target with your project, to handling various approvals, or even figuring out which kind of real estate is performing well in the market. From the beginning to the end, we accompany you every step of the way and offer you tested tactics and advice to make sure your project is a success.`
  },
  {
    icon: icons.WindPowerIcon,
    serviceName: 'RENEWABLE ENERGY POWER GENERATION ',
    description:
      'Since adoption of the Paris Agreement on 2nd Dec 2015, the world has been shifting more towards renewable energy sources. And Africa is not being left behind in this shift. The treaty came at a very critical time as our industries and population are expanding quickly and driving up the demand for electricity. '
  },
  {
    icon: icons.CurrencyExchangeIcon,
    serviceName: 'PROJECT FUNDING',
    description:
      'Coming to a financial close for your project can double the challenge of being a project owner. To make your life easier, throughout the course of the years our team has cultivated partnerships with family offices, development banks, investment firms, and other organizations that aim to finance initiatives in Africa throughout the course of the years. Every one of them has its own qualifications and funding programs.'
  },
  {
    icon: icons.LocationCityIcon,
    serviceName: 'PROPERTY ACQUISITION & CONVEYANCING',
    description:
      'The journey of acquiring property has never been simple. From selecting a property, making decisions to the incredibly time-consuming conveyancing process. We take satisfaction applying processes that we established and redefined over the years from serving other clients. Assisting them in making appropriate decisions within the predetermined timeframes..'
  }
];

export default function page() {
  return (
    <Page title="Services">
      <Container maxWidth="xl">
        <Typography variant="h2" color="secondary" align="center" gutterBottom>
          Areas of Speciality
        </Typography>
        <Grid container spacing={gridSpacing}>
          {consultancy_services.map((service, index) => (
            <Grid key={index} item xs={12} md={service.fullWidth ? 12 : 6}>
              <ConsultancyCard
                icon={service.icon}
                serviceName={service.serviceName}
                description={service.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
