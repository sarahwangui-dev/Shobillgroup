'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Page from '../../Page';
import MainCard from '../../ui-components/cards/MainCard';
import {
  Button,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Tabs,
  Tab,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { gridSpacing } from '@/common/utils/constants';
import UserProfile from '../../User/UserProfile';
import { icons } from '@/common/utils/icons';
import { borderRadius } from '@/common/utils/constants';
import ChangePassword from '../../User/ChangePassword';

const {
  PersonOutlineTwoToneIcon,
  //   DescriptionTwoToneIcon,
  //   CreditCardTwoToneIcon,
  VpnKeyTwoToneIcon
} = icons;

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// tabs option
const tabsOption = [
  {
    label: 'User Profile',
    icon: <PersonOutlineTwoToneIcon />,
    caption: 'Profile Settings'
  },
  //   {
  //     label: 'Billing',
  //     icon: <DescriptionTwoToneIcon />,
  //     caption: 'Billing Information'
  //   },
  //   {
  //     label: 'Payment',
  //     icon: <CreditCardTwoToneIcon />,
  //     caption: 'Add & Update Card'
  //   },
  {
    label: 'Change Password',
    icon: <VpnKeyTwoToneIcon />,
    caption: 'Update Profile Security'
  }
];

export default function PropertyOwnerDetails() {
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Page title="Property Owner">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Property Owner" content={false}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={4}>
                <CardContent>
                  {' '}
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    orientation="vertical"
                    variant="scrollable"
                    sx={{
                      '& .MuiTabs-flexContainer': {
                        borderBottom: 'none'
                      },
                      '& button': {
                        color:
                          theme.palette.mode === 'dark'
                            ? theme.palette.grey[600]
                            : theme.palette.grey[600],
                        minHeight: 'auto',
                        minWidth: '100%',
                        py: 1.5,
                        px: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        justifyContent: 'flex-start',
                        borderRadius: `${borderRadius}px`
                      },
                      '& button.Mui-selected': {
                        color: theme.palette.primary.main,
                        background:
                          theme.palette.mode === 'dark'
                            ? theme.palette.dark.main
                            : theme.palette.grey[50]
                      },
                      '& button > svg': {
                        marginBottom: '0px !important',
                        marginRight: 1.25,
                        marginTop: 1.25,
                        height: 20,
                        width: 20
                      },
                      '& button > div > span': {
                        display: 'block'
                      },
                      '& > div > span': {
                        display: 'none'
                      }
                    }}
                  >
                    {tabsOption.map((tab, index) => (
                      <Tab
                        key={index}
                        icon={tab.icon}
                        label={
                          <Grid container direction="column">
                            <Typography variant="subtitle1" color="inherit">
                              {tab.label}
                            </Typography>
                            <Typography
                              component="div"
                              variant="caption"
                              sx={{ textTransform: 'capitalize' }}
                            >
                              {tab.caption}
                            </Typography>
                          </Grid>
                        }
                        {...a11yProps(index)}
                      />
                    ))}
                  </Tabs>
                </CardContent>
              </Grid>
              <Grid item xs={12} md={8}>
                <CardContent
                  sx={{
                    borderLeft: '1px solid',
                    borderColor:
                      theme.palette.mode === 'dark'
                        ? theme.palette.background.default
                        : theme.palette.grey[200],
                    height: '100%'
                  }}
                >
                  <TabPanel value={value} index={0}>
                    <UserProfile />
                  </TabPanel>
                  {/* <TabPanel value={value} index={1}>
                    <Typography>Billing</Typography>{' '}
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Typography>Payment</Typography>
                  </TabPanel> */}

                  <TabPanel value={value} index={1}>
                    <ChangePassword />
                  </TabPanel>
                </CardContent>
              </Grid>
            </Grid>
            <Divider />
            <CardActions>
              <Grid container justifyContent="space-between" spacing={0}>
                <Grid item>
                  {value > 0 && (
                    <Button
                      color="secondary"
                      size="large"
                      onClick={(e) => handleChange(e, value - 1)}
                    >
                      Back
                    </Button>
                  )}{' '}
                </Grid>
                <Grid item>
                  {value < 3 && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={(e) => handleChange(e, 1 + value)}
                    >
                      Continue
                    </Button>
                  )}
                </Grid>
              </Grid>
            </CardActions>
          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
}
