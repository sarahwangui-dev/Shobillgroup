import PropTypes from 'prop-types';
import { ListItemButton, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// eslint-disable-next-line no-unused-vars
export default function NavItem({ item, level, action }) {
  const theme = useTheme();

  return (
    <ListItemButton
      sx={{
        borderRadius: `${10}px`,
        p: 1,
        my: 0.5,
        mr: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'inherit'
      }}
    >
      <ListItemText
        primary={<Typography>{item.title}</Typography>}
        secondary={
          item.caption && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.subMenuCaption }}
              display="block"
              gutterBottom
            >
              {item.caption}
            </Typography>
          )
        }
      />
    </ListItemButton>
  );
}

NavItem.PropTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};
