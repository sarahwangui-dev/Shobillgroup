import React from 'react';
import { Container, Grid, Typography, Card, Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { spacing } from '@/common/utils/constants';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AddchartIcon from '@mui/icons-material/Addchart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary
}));

export default function WhyChooseUs() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h1">Why Choose Us</Typography>

      <Grid container spacing={spacing} paddingTop={5}>
        <Grid item sm={12} md={4}>
          <Card
            sx={{
              maxWidth: { md: '25rem' },
              width: { xs: '100%' }
            }}
          >
            <Stack direction="row">
              <Item>
                <StarBorderIcon fontSize="large" color="secondary" />
              </Item>
              <Item>
                <Typography variant="h3">Integrity</Typography>
                <Typography variant="body2">
                  Our foundation is built on trust, honesty, and ethical
                  practices. We deliver on our promises, ensuring transparency
                  and accountability in every transaction.
                </Typography>
              </Item>
            </Stack>
          </Card>
        </Grid>

        <Grid item sm={12} md={4}>
          <Card
            sx={{
              maxWidth: { md: '25rem' },
              width: { xs: '100%' }
            }}
          >
            <Stack direction="row">
              <Item>
                <EmojiObjectsIcon fontSize="large" color="secondary" />
              </Item>
              <Item>
                <Typography variant="h3">Expertise</Typography>
                <Typography variant="body2">
                  Backed by years of experience and a strong network across
                  Africa, we provide unparalleled insights and solutions to meet
                  your specific mineral sourcing needs.
                </Typography>
              </Item>
            </Stack>
          </Card>
        </Grid>

        <Grid item sm={12} md={4}>
          <Card
            sx={{
              maxWidth: { md: '25rem' },
              width: { xs: '100%' }
            }}
          >
            <Stack direction="row">
              <Item>
                <AddchartIcon fontSize="large" color="secondary" />
              </Item>
              <Item>
                <Typography variant="h3">On-Time Delivery</Typography>
                <Typography variant="body2">
                  Your time is our priority. We leverage efficient systems and
                  reliable partnerships to ensure your minerals are delivered
                  promptly, without compromising quality.
                </Typography>
              </Item>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
