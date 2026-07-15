'use client';

import { useTheme, styled } from '@mui/material/styles';
import { Box, Container, useMediaQuery, AppBar, Toolbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import { openDrawer, SET_MENU } from '@/common/store/menu';
import ConfigProvider, {
  ConfigContext
} from '@/common/utils/contexts/AppConfigContext';
import { drawerWidth, LAYOUT_CONST } from '@/common/utils/constants';
import PortalHeader from './header';
import Sidebar from './sidebar';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open, layout }) => ({
    ...theme.typography.mainContent,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: layout === LAYOUT_CONST.HORIZONTAL_LAYOUT ? 135 : 88,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.shorter
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }),
    ...(!open && {
      // marginLeft: layout === LAYOUT_CONST.VERTICAL_LAYOUT ? '72px' : '20px',
      width: '100%'
    }),
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
      marginRight: '10px'
    }
  })
);

export default function PortalLayout({ children }) {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const { layout, drawerType } = useContext(ConfigContext);
  const { drawerOpen } = useSelector((state) => state.menu);

  useEffect(() => {
    if (drawerType === LAYOUT_CONST.DEFAULT_DRAWER) {
      dispatch(openDrawer(true));
    } else {
      dispatch(openDrawer(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerType]);

  useEffect(() => {
    if (drawerType === LAYOUT_CONST.DEFAULT_DRAWER) {
      dispatch(openDrawer(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (matchDownMd) {
      dispatch(openDrawer(true));
    }
    dispatch({ type: SET_MENU, opened: !matchDownMd });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd]);

  // console.log(matchDownMd, dispatch, drawerType);

  // const condition = layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && !matchDownMd;

  return (
    <ConfigProvider>
      <Box display="flex">
        <AppBar
          enableColorOnDark
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: theme.palette.primary[200],
            zIndex: theme.zIndex.drawer + 1
          }}
        >
          <Toolbar
            sx={{ p: '10px' }}
            // sx={{ p: condition ? '10px' : '16px' }}
          >
            <PortalHeader />
          </Toolbar>
        </AppBar>

        {(layout === LAYOUT_CONST.VERTICAL_LAYOUT || matchDownMd) && (
          <Sidebar />
        )}

        <Main theme={theme} open={drawerOpen} layout={layout}>
          <Container maxWidth="xl">{children}</Container>
        </Main>
      </Box>
    </ConfigProvider>
  );
}
