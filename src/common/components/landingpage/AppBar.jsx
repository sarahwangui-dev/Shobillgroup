'use client';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  useScrollTrigger,
  Box,
  Container,
  Toolbar,
  Typography,
  Stack,
  Button,
  Link,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  ListSubheader,
  Paper,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  Collapse,
  useMediaQuery
} from '@mui/material';
import { icons } from '@/common/utils/icons';
import ShobillBlackLogoTag from '@/common/utils/logos/ShobillBlackLogoTag';

function ElevationScroll({ children, window }) {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });

  const darkBorder =
    theme.palette.mode === 'dark'
      ? theme.palette.dark.dark
      : theme.palette.grey[500];

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    style: {
      backgroundColor: theme.palette.white.main,
      borderBottom: trigger ? 'none' : `1px solid `,
      borderColor: trigger ? '' : darkBorder,
      color: theme.palette.text.dark
    }
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.node,
  window: PropTypes.object
};

const MenuIcon = icons.MenuIcon;
const HomeIcon = icons.HomeIcon;
const AboutIcon = icons.InfoIcon;
const ProjectsIcon = icons.HomeWorkIcon;
const ServicesIcon = icons.HomeRepairServiceIcon;
const {
  ExpandMore,
  ExpandLess,
  CloseIcon,
  ContactPhoneIcon,
  EngineeringIcon,
  TerrainIcon,
  LinkedInIcon,
  PlayCircleOutlineIcon,
  FacebookIcon
} = icons;

// Socials
const WhatsappIcon = icons.WhatsAppIcon;

export default function AppBar({ ...others }) {
  const [drawerToggle, setDrawerToggle] = useState(false);
  const drawerToggler = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerToggle(open);
  };

  const [openServices, setOpenServices] = useState(false);
  const anchorRef = useRef(null);
  // const [anchorEl, setAnchorEl] = useState(null);

  const handleToggleServices = () => {
    setOpenServices((prev) => !prev);
  };

  const handleCloseServicesMenu = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    // setAnchorEl(anchorEl ? null : event.currentTarget);

    setOpenServices(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenServices(false);
    } else if (event.key === 'Escape') {
      setOpenServices(false);
    }
  }

  // Return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(openServices);
  useEffect(() => {
    if (prevOpen.current === true && openServices === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openServices;
  }, [openServices]);

  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  //Function to toggle socials dropdown on mobile
  const [openSocials, setOpenSocials] = useState(false);

  const handleToggleSocials = () => {
    setOpenSocials((prev) => !prev);
  };
  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              component={Link}
              href="/"
              sx={{ flexGrow: 1, textAlign: 'left' }}
            >
              <ShobillBlackLogoTag height={60} width={100} />
            </Typography>

            <Stack
              direction="row"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              spacing={2}
            >
              <Button color="secondary" component={Link} href="/">
                Home
              </Button>

              <Button
                color="secondary"
                ref={anchorRef}
                onClick={handleToggleServices}
                aria-controls={openServices ? 'composition-menu' : undefined}
                aria-expanded={openServices ? 'true' : undefined}
              >
                Services
              </Button>

              <Popper
                open={openServices}
                anchorEl={isDesktop ? anchorRef.current : null}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start'
                          ? 'left top'
                          : 'left bottom'
                    }}
                  >
                    <Paper
                      sx={{
                        minWidth: 190
                      }}
                    >
                      <ClickAwayListener onClickAway={handleCloseServicesMenu}>
                        <MenuList
                          autoFocusItem={openServices}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <Link
                            style={{ textDecoration: 'none' }}
                            href="/services/consulting"
                          >
                            <MenuItem onClick={handleCloseServicesMenu}>
                              Consultancy
                            </MenuItem>
                          </Link>

                          <Divider />
                          <Link
                            style={{ textDecoration: 'none' }}
                            href="/services/properties"
                          >
                            <MenuItem onClick={handleCloseServicesMenu}>
                              Properties
                            </MenuItem>
                          </Link>
                          <Divider />
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>

              <Button color="secondary" component={Link} href="/about">
                About Us
              </Button>

              <Button color="secondary" component={Link} href="/insights">
                Insights
              </Button>

              <Button
                color="primary"
                variant="contained"
                size="large"
                component={Link}
                href="/contact"
              >
                Contact Us
              </Button>
            </Stack>

            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton
                color="inherit"
                onClick={drawerToggler(true)}
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerToggle}
                onClose={drawerToggler(false)}
              >
                {drawerToggle && (
                  <Stack>
                    <IconButton
                      onClick={drawerToggler(false)}
                      sx={{ alignSelf: 'flex-end' }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Box
                      sx={{ width: 'auto' }}
                      role="presentation"
                      // onClick={drawerToggler(false)}
                      // onKeyDown={drawerToggler(false)}
                    >
                      <List
                        component="nav"
                        subheader={
                          <ListSubheader component="div">Pages</ListSubheader>
                        }
                      >
                        <Link style={{ textDecoration: 'none' }} href="/">
                          <ListItemButton>
                            <ListItemIcon>
                              <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                          </ListItemButton>
                        </Link>

                        <Fragment>
                          <ListItemButton
                            onClick={(e) => {
                              e.preventDefault();
                              handleToggleServices();
                            }}
                          >
                            <ListItemIcon>
                              <ServicesIcon />
                            </ListItemIcon>
                            <ListItemText>Services</ListItemText>
                            {openServices ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>
                          <Collapse
                            in={openServices}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div">
                              <Divider />
                              <ListItemButton
                                sx={{ pl: 5 }}
                                href="/services/consulting"
                              >
                                <ListItemIcon>
                                  <EngineeringIcon />
                                </ListItemIcon>
                                <ListItemText primary="Consulting" />
                              </ListItemButton>

                              <Divider />

                              <ListItemButton
                                sx={{ pl: 5 }}
                                href="/services/properties"
                              >
                                <ListItemIcon>
                                  <TerrainIcon />
                                </ListItemIcon>
                                <ListItemText primary="Property" />
                              </ListItemButton>

                              <Divider />
                            </List>
                          </Collapse>
                        </Fragment>

                        <Link style={{ textDecoration: 'none' }} href="/about">
                          <ListItemButton>
                            <ListItemIcon>
                              <AboutIcon />
                            </ListItemIcon>
                            <ListItemText>About Us</ListItemText>
                          </ListItemButton>
                        </Link>

                        <Link
                          style={{ textDecoration: 'none' }}
                          href="/insights"
                        >
                          <ListItemButton>
                            <ListItemIcon>
                              <ProjectsIcon />
                            </ListItemIcon>
                            <ListItemText>Insights</ListItemText>
                          </ListItemButton>
                        </Link>

                        <Link
                          style={{ textDecoration: 'none' }}
                          href="/contact"
                        >
                          <ListItemButton>
                            <ListItemIcon>
                              <ContactPhoneIcon />
                            </ListItemIcon>
                            <ListItemText>Contact Us</ListItemText>
                          </ListItemButton>
                        </Link>
                      </List>
                      <Divider />

                      <>
                        <ListItemButton onClick={handleToggleSocials}>
                          <ListItemText primary="Socials" />

                          {openSocials ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={openSocials} timeout="auto" unmountOnExit>
                          <List
                            // component="div"
                            disablePadding
                            component="nav"
                            // subheader={<ListSubheader>Socials</ListSubheader>}
                          >
                            <Link
                              style={{ textDecoration: 'none' }}
                              href="https://www.linkedin.com/company/shobill-group/"
                              target="_blank"
                            >
                              <ListItemButton>
                                <ListItemIcon>
                                  <LinkedInIcon />
                                </ListItemIcon>
                                <ListItemText>LinkedIn</ListItemText>
                              </ListItemButton>
                            </Link>

                            <Link
                              style={{ textDecoration: 'none' }}
                              href="https://www.tiktok.com/@shobillgroup?_t=ZM-8y2ixbCal2E&_r=1"
                              target="_blank"
                            >
                              <ListItemButton>
                                <ListItemIcon>
                                  <PlayCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText>TikTok</ListItemText>
                              </ListItemButton>
                            </Link>

                            <Link
                              style={{ textDecoration: 'none' }}
                              href="https://www.facebook.com/share/15zikE5b1o/"
                              target="_blank"
                            >
                              <ListItemButton>
                                <ListItemIcon>
                                  <FacebookIcon />
                                </ListItemIcon>
                                <ListItemText>Facebook</ListItemText>
                              </ListItemButton>
                            </Link>

                            <Link
                              style={{ textDecoration: 'none' }}
                              href="https://wa.me/254792029798"
                              target="_blank"
                            >
                              <ListItemButton>
                                <ListItemIcon>
                                  <WhatsappIcon />
                                </ListItemIcon>
                                <ListItemText>Whatsapp</ListItemText>
                              </ListItemButton>
                            </Link>
                          </List>
                        </Collapse>
                      </>
                    </Box>
                  </Stack>
                )}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
}
