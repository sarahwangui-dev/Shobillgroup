'use client';
import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogContent, Grid, TextField } from '@mui/material';
import MainCard from '../../ui-components/cards/MainCard';
import { useForm, Controller } from 'react-hook-form';

export default function ViewPropertyOwnerDetails({ owner }) {
  // const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      city: '',
      country: '',
      address: ''
    }
  });

  useEffect(() => {
    if (owner) {
      reset(owner); // Populate the form with `owner` data
    }
  }, [owner, reset]);

  const handleEdit = () => {
    setIsEditable(true); // Enable editing mode
  };

  const updateOwnerInformation = (data) => {
    console.log('Data', data);
  };

  return (
    <div>
      <Button size="small" variant="contained" onClick={handleClickOpen}>
        View
      </Button>

      <Dialog
        // fullScreen={fullScreen}
        maxWidth="lg"
        fullWidth
        open={open}
        onClose={handleClose}
      >
        {open && (
          <MainCard
            title="Owner"
            secondary={
              !isEditable && (
                <Button size="small" variant="contained" onClick={handleEdit}>
                  Edit
                </Button>
              )
            }
          >
            <form onSubmit={handleSubmit(updateOwnerInformation)}>
              <DialogContent>
                <Grid container spacing={3} paddingLeft={3} paddingRight={3}>
                  <Grid item xs={12} md={6}>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Name"
                          variant="outlined"
                          type="text"
                          disabled={!isEditable}
                          size="medium"
                          fullWidth
                          required
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Email"
                          variant="outlined"
                          fullWidth
                          type="email"
                          disabled={!isEditable}
                          size="medium"
                          required
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Controller
                      name="mobile"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Mobile"
                          variant="outlined"
                          fullWidth
                          disabled={!isEditable}
                          size="medium"
                          required
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Controller
                      name="city"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="City"
                          variant="outlined"
                          fullWidth
                          disabled={!isEditable}
                          size="medium"
                          required
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Controller
                      name="country"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Country"
                          variant="outlined"
                          disabled={!isEditable}
                          size="medium"
                          required
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Controller
                      name="address"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Address"
                          variant="outlined"
                          disabled={!isEditable}
                          size="medium"
                          required
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              {isEditable && (
                <Grid
                  container
                  justifyContent="flex-end"
                  sx={{ mt: 2, padding: '0 24px' }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mr: 2 }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      reset(owner); // Reset form to original values
                      setIsEditable(false); // Exit editing mode
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
              )}
            </form>
          </MainCard>
        )}
      </Dialog>
    </div>
  );
}
