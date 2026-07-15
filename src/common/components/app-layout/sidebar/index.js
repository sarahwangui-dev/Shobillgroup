import { Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { drawerWidth } from '@/common/utils/constants';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { openDrawer } from '@/common/store/menu';
import MenuList from './MenuList';

export default function Sidebar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const { drawerOpen } = useSelector((state) => state.menu);

  const drawer = (
    <PerfectScrollbar
      component="div"
      style={{
        height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
        paddingLeft: drawerOpen ? '16px' : 0,
        paddingRight: drawerOpen ? '16px' : 0,
        marginTop: drawerOpen ? 0 : '20px'
      }}
    >
      <MenuList />
    </PerfectScrollbar>
  );

  return (
    <Drawer
      variant={matchUpMd ? 'persistent' : 'temporary'}
      anchor="left"
      open={drawerOpen}
      onClose={() => dispatch(openDrawer(!drawerOpen))}
      sx={{
        zIndex: theme.zIndex.drawer,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          background: theme.palette.primary[200],
          color: theme.palette.primary.main,
          borderRight: 'none',
          [theme.breakpoints.up('md')]: {
            top: `${theme.spacing(10)}` // Adjust this value for desktop screens
          },
          [theme.breakpoints.down('md')]: {
            top: `${theme.spacing(10)}` // Adjust this value for mobile screens
          }
        }
      }}
      ModalProps={{ keepMounted: true }}
      color="inherit"
    >
      {drawer}
    </Drawer>
  );
}
