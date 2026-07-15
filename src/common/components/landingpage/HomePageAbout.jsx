'use client';
import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Card,
  Stack,
  Typography,
  Button
} from '@mui/material';
import ContactUs from '../ContactUs';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1)
  // backgroundColor: theme.palette.secondary[200]
}));

export default function HomePageAbout() {
  return (
    <Container maxWidth="xl" sx={{ padding: 2 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Card>
            <Stack spacing={1}>
              <Item>
                <Typography variant="h1" color="secondary">
                  About Shobill
                </Typography>
              </Item>

              <Item>
                <Typography
                  variant="body2"
                  sx={{ lineHeight: '1.55em', fontSize: '1em' }}
                >
                  The Shobill Group is a business that is registered under the
                  Kenyan law. Our goal is to enable African project promoters,
                  entrepreneurs, and institutions by giving them access to
                  global lenders & financiers and by facilitating partnerships
                  with professionals of varied expertise and experience.
                  Additionally, we collaborate closely with foreign companies
                  seeking to make entry into Africa, the last tier of the
                  growing markets.{' '}
                </Typography>
              </Item>

              <Item>
                <Typography
                  variant="body2"
                  sx={{ lineHeight: '1.75em', fontSize: '1em' }}
                >
                  In 2020, we began as a real estate development consulting and
                  brokerage firm. A field where we continually enhanced our
                  skill by supporting our clients in delivering projects that
                  have excellent market appeal and great returns. We have been
                  involved in a variety of ways, including planning, sourcing
                  development sites, conducting feasibility studies, negotiating
                  and offering advice on joint ventures, and sourcing for
                  funding partners.
                </Typography>
              </Item>

              <Item>
                <Typography
                  variant="body2"
                  sx={{ lineHeight: '1.75em', fontSize: '1em' }}
                >
                  Our team has an array of expertise collaborating with creative
                  individuals to execute multimillion-dollar projects in the
                  fields of real estate, renewable energy, agriculture, and
                  other industries. Our internal research team periodically
                  conducts market studies on the real estate and energy sectors,
                  which inform how we operate and what insights we provide to
                  our clients.
                </Typography>
              </Item>

              {/* <Item>
                <Typography
                  variant="body2"
                  sx={{ lineHeight: '1.75em', fontSize: '1em' }}
                >
                  Demand for housing and electricity is rising quickly
                  throughout Africa. By 2050, there will be 2.5 billion people
                  in Africa, up from the present 1.36 billion. Our youthful
                  population is among the largest in the world, and the majority
                  of them reside in cities.
                </Typography>
              </Item> */}

              {/* <Item>
                <Typography
                  variant="body2"
                  sx={{ lineHeight: '1.75em', fontSize: '1em' }}
                >
                  As the Shobill Group, we are paving the way in resolving
                  issues in our continent while creating employment for our
                  youths and producing significant profits for our investors.
                </Typography>
              </Item> */}

              <Item>
                <Button href="/about" variant="outlined">
                  Click here to learn more...
                </Button>
              </Item>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          {' '}
          <ContactUs />
        </Grid>
      </Grid>
    </Container>
  );
}
