// 'use client';

// import { Paper, Button, Typography, Box, Stack } from '@mui/material';

// export default function Error({ error }) {
//   return (
//     // <div className="auth_background">
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh'
//       }}
//     >
//       <Paper sx={{ p: 3 }} elevation={3}>
//         <Typography variant="h3" color="primary" gutterBottom>
//           Oops! Something went wrong
//         </Typography>
//         <Stack direction="column" spacing={2}>
//           <Typography variant="body2" color="red" align="center">
//             {error.message}
//           </Typography>
//           <Button variant="contained">Refresh page</Button>
//         </Stack>
//       </Paper>
//     </Box>
//     // </div>
//   );
// }

'use client';

import { Paper, Button, Typography, Box, Stack } from '@mui/material';

export default function Error({ error }) {
  const handleRefresh = () => {
    // Implement your preferred refresh logic here
    // For example, you can use window.location.reload() to reload the current page
    window.location.reload();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0' // Add a light gray background for a more pleasing look
      }}
    >
      <Paper
        sx={{
          p: 3,
          borderRadius: '10px', // Add rounded corners for a more modern appearance
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Add a subtle shadow for depth
          maxWidth: '50vw'
        }}
      >
        <Typography variant="h3" color="primary" gutterBottom>
          Oops! Something went wrong
        </Typography>
        <Stack direction="column" spacing={2}>
          <Typography variant="body2" color="red" align="center">
            {error.message}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleRefresh}>
            Refresh Page
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
