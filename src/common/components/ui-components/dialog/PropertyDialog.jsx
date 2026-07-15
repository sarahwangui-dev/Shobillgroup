import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Button,
  Dialog,
  DialogContent,
  useMediaQuery,
  Grid
} from '@mui/material';
import ProductImage from '../../Properties/ProductImage';
import ProductInfo from '../../Properties/ProductInfo';
import { gridSpacing } from '@/common/utils/constants';

export default function PropertyDialog({ property }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button size="small" variant="contained" onClick={handleClickOpen}>
        View
      </Button>
      <Dialog
        fullScreen={fullScreen}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
      >
        {open && (
          <>
            <DialogContent>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={6}>
                  <ProductImage property={property} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ProductInfo property={property} />
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
}
