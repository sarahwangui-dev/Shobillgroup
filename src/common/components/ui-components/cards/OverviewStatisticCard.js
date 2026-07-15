'use client';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Skeleton,
  Typography,
  useMediaQuery
} from '@mui/material';

const OverviewStatisticCard = ({
  primary,
  secondary,
  content,
  iconPrimary,
  color,
  loading
}) => {
  const theme = useTheme();
  const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

  // const IconPrimary = iconPrimary;
  // const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

  return (
    <Card
      sx={{
        background: color,
        position: 'relative',
        color: '#fff',
        height: 120
      }}
    >
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            position: 'absolute',
            right: 13,
            top: 14,
            color: '#fff',
            '&> svg': { width: 100, height: 100, opacity: '0.5' },
            [theme.breakpoints.down('sm')]: {
              top: 13,
              '&> svg': { width: 80, height: 80 }
            }
          }}
        >
          {iconPrimary}
        </Typography>
        <Grid container direction={matchDownXs ? 'column' : 'row'} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" color="inherit">
              {primary}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {loading ? (
              <Box>
                <Skeleton variant="text" width={100} height={40} />
              </Box>
            ) : (
              <Typography variant="h3" color="inherit">
                {secondary}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" color="inherit">
              {content}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

OverviewStatisticCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  content: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string
};

export default OverviewStatisticCard;
