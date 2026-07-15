import PropTypes from 'prop-types';
import { Box } from '@mui/material';

export default function layout({ children }) {
  return (
    <div className="auth_background">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        {children}
      </Box>
    </div>
  );
}

layout.propTypes = {
  children: PropTypes.node.isRequired
};
