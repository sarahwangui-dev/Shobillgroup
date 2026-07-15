'use client';
import PropTypes from 'prop-types';

// material-ui
import { Box, Drawer, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const RightDrawer = ({ open, handleDrawerOpen, children, title }) => {
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        ml: open ? 3 : 0,
        flexShrink: 0,
        zIndex: theme.zIndex.drawer + 1,
        overflowX: 'hidden',
        width: { xs: 320, md: 450 },
        '& .MuiDrawer-paper': {
          height: '100vh',
          width: { xs: 320, md: 450 },
          position: 'fixed',
          border: 'none',
          borderRadius: '0px'
        }
      }}
      variant="temporary"
      anchor="right"
      open={open}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerOpen}
    >
      {open && (
        <Box
          sx={{
            p: 3
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2
            }}
          >
            <Typography variant="h3">{title}</Typography>
            <IconButton onClick={handleDrawerOpen}>
              <CloseIcon />
            </IconButton>
          </Box>
          {children}
        </Box>
      )}
    </Drawer>
  );
};

RightDrawer.propTypes = {
  open: PropTypes.bool,
  handleDrawerOpen: PropTypes.func
};

export default RightDrawer;
