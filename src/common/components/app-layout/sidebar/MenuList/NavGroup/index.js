'use client';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery
} from '@mui/material';
import NavItem from '../Navitem';
import NavCollapse from '../NavCollapse';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
export default function NavGroup({ item }) {
  const theme = useTheme();

  const router = useRouter();
  const { selectedId } = useSelector((state) => state.menu);
  const borderRadius = 8;
  // eslint-disable-next-line no-unused-vars
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [currentItem, setCurrentItem] = useState(item);

  const openMini = Boolean(anchorEl);

  ///////////// to be reviewed

  const checkOpenForParent = (child, id) => {
    child.forEach((ele) => {
      if (ele.children?.length) {
        checkOpenForParent(ele.children, currentItem.id);
      }
      if (ele.url === router.pathname) {
        // eslint-disable-next-line no-undef
        dispatch(activeID(id));
      }
    });
  };

  const checkSelectedOnload = (data) => {
    const childrens = data.children ? data.children : [];
    childrens.forEach((itemCheck) => {
      if (itemCheck.children?.length) {
        checkOpenForParent(itemCheck.children, currentItem.id);
      }
      if (itemCheck.url === router.pathname) {
        // eslint-disable-next-line no-undef
        dispatch(activeID(currentItem.id));
      }
    });
  };

  useEffect(() => {
    checkSelectedOnload(currentItem);
    if (openMini) setAnchorEl(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItem]);

  // eslint-disable-next-line no-unused-vars
  const handleClick = (event) => {
    if (!openMini) {
      setAnchorEl(event?.currentTarget);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (url) => {
    router.push(url); // Navigate to the clicked item URL
  };

  ////////////

  const Icon = currentItem?.icon;
  const itemIcon = currentItem?.icon ? <Icon stroke={1.5} size="20px" /> : null;

  // menu list collapse & items
  // eslint-disable-next-line no-unused-vars
  const items = currentItem.children?.map((menu) => {
    switch (menu.type) {
      case 'collapse':
        return (
          <NavCollapse
            key={menu.id}
            menu={menu}
            level={1}
            parentId={currentItem.id}
          />
        );
      case 'item':
        return (
          <NavItem
            key={menu.id}
            item={menu}
            level={1}
            parentId={currentItem.id}
          />
        );
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <List>
      .{' '}
      <ListItemButton
        selected={selectedId === currentItem.id}
        sx={{
          borderRadius: `${borderRadius}px`,
          p: 1.5,
          my: 0.5,
          mr: 1,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'inherit',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)'
          }
        }}
        onClick={() => handleNavigation(currentItem.url)}
      >
        {itemIcon && (
          <ListItemIcon
            sx={{
              minWidth: 36,
              color: selectedId === currentItem.id ? 'primary.main' : 'inherit'
            }}
          >
            {itemIcon}
          </ListItemIcon>
        )}

        <ListItemText
          sx={{ ml: 2 }}
          primary={
            <Typography
              variant={selectedId === currentItem.id ? 'h6' : 'body1'}
              color="inherit"
              sx={{ fontWeight: selectedId === currentItem.id ? 600 : 400 }}
            >
              {currentItem.title}
            </Typography>
          }
        />
      </ListItemButton>
    </List>
  );
}
NavGroup.propTypes = {
  item: PropTypes.object
};
