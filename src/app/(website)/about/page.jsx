import React from 'react';
import Page from '@/common/components/Page';
import { Container, Grid, Typography } from '@mui/material';
import CustomElevatedPaper from '@/common/components/ui-components/CustomElevatedPaper';
import CustomParagraph from '@/common/components/ui-components/CustomParagraph';

export default function page() {
  return (
    <Page title="About Shobill">
      <Container maxWidth="xl">
        <Typography variant="h2" color="secondary" align="center" gutterBottom>
          About Shobill
        </Typography>
        <CustomElevatedPaper>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} padding={3}>
              <Typography variant="h3" color="secondary" gutterBottom>
                Who We are
              </Typography>
              <CustomParagraph color="secondary">
                The Shobill Group is a business that is registered under the
                Kenyan law. Our goal is to enable African project promoters,
                entrepreneurs, and institutions by giving them access to global
                lenders & financiers and by facilitating partnerships with
                professionals of varied expertise and experience. Additionally,
                we collaborate closely with foreign companies seeking to make
                entry into Africa, the last tier of the growing markets.
              </CustomParagraph>

              <CustomParagraph color="secondary">
                In 2020, we began as a real estate development consulting and
                brokerage firm. A field where we continually enhanced our skill
                by supporting our clients in delivering projects that have
                excellent market appeal and great returns. We have been involved
                in a variety of ways, including planning, sourcing development
                sites, conducting feasibility studies, negotiating and offering
                advice on joint ventures, and sourcing for funding partners. Our
                team has an array of expertise collaborating with creative
                individuals to execute multimillion-dollar projects in the
                fields of real estate, renewable energy, agriculture, and other
                industries. Our internal research team periodically conducts
                market studies on the real estate and energy sectors, which
                inform how we operate and what insights we provide to our
                clients.
              </CustomParagraph>

              <CustomParagraph color="secondary">
                Demand for housing and electricity is rising quickly throughout
                Africa. By 2050, there will be 2.5 billion people in Africa, up
                from the present 1.36 billion. Our youthful population is among
                the largest in the world, and the majority of them reside in
                cities. As the Shobill Group, we are paving the way in resolving
                issues in our continent while creating employment for our youths
                and producing significant profits for our investors.
              </CustomParagraph>
            </Grid>
          </Grid>
        </CustomElevatedPaper>
      </Container>
    </Page>
  );
}
