import { Fragment } from 'react';
import { Typography } from '@mui/material';
import NavGroup from './NavGroup';
import menuItems from '../menu-items';

export default function MenuList() {
  const navItems = menuItems.items?.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <Fragment>{navItems}</Fragment>;
}
