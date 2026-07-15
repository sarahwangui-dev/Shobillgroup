import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Chip,
  Avatar,
  Popover,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';

import { icons } from '@/common/utils/icons';
import { logout } from '@/app/(auth)/actions';
import { logoutUser } from '@/common/store/auth/authSlice';
import { useDispatch } from 'react-redux';

const { LogoutIcon, SettingsIcon } = icons;

export default function ProfileSection() {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const dispatch = useDispatch();
  // const { initialStatus, login, isLoggedIn, user, verified } = useSelector(
  //   (state) => state.auth
  // );

  // console.log({
  //   Initial: initialStatus,
  //   login: login,
  //   'Is Logged in': isLoggedIn,
  //   user: user,
  //   verified: verified
  // });

  const handleLogout = () => {
    dispatch(logoutUser());
    logout();
  };
  return (
    <div>
      {' '}
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          // borderColor: '#EEF2F6',
          borderColor:
            theme.palette.mode === 'dark'
              ? theme.palette.dark.main
              : theme.palette.primary.light,
          // backgroundColor: '#EEF2F6',
          backgroundColor:
            theme.palette.mode === 'dark'
              ? theme.palette.dark.main
              : theme.palette.primary.light,
          '&:hover': {
            borderColor: theme.palette.primary.light,
            background: `${theme.palette.secondary.light} !important`,
            color: theme.palette.secondary.light,
            '& svg': {
              stroke: theme.palette.primary.light
            }
          },
          '& .MuiChip-label': {
            lineHeight: 0
          }
        }}
        icon={
          <Avatar
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.primary.dark,
                color: theme.palette.primary.light
              },
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer'
            }}
            // src="/profileAvatar.svg"
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label={<SettingsIcon />}
        variant="outlined"
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <List sx={{ p: 0, width: '220px' }}>
          <ListItemButton
            sx={{
              borderRadius: 2,
              px: 2,
              py: 1.5,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'transparent',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)'
              }
            }}
            // onClick={handleLogout}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <SettingsIcon sx={{ color: 'text.primary' }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" color="text.primary">
                  Account and profile
                </Typography>
              }
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              borderRadius: 2,
              px: 2,
              py: 1.5,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'transparent',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)'
              }
            }}
            onClick={handleLogout}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <LogoutIcon sx={{ color: 'text.primary' }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" color="text.primary">
                  Logout
                </Typography>
              }
            />
          </ListItemButton>
        </List>
      </Popover>
    </div>
  );
}
