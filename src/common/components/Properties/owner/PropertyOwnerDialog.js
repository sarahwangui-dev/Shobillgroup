'use client';
import React, { useState, Fragment, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  DialogContentText,
  Typography,
  DialogActions,
  useMediaQuery,
  IconButton
} from '@mui/material';
import CustomInputField from '../../ui-components/CustomInputField';
import { useForm } from 'react-hook-form';
import { icons } from '@/common/utils/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { propertyOwnerSchema } from './propertyOwnerSchema';
import { usePostPropertyOwnerMutation } from '@/common/store/rootApi';
import useToast from '@/common/utils/hooks/useToast';
import CircularLoader from '../../ui-components/cards/CircularLoader';

const { AddIcon } = icons;

export default function PropertyOwnerDialog({ iconButton }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleToggleOwnerDialog = () => {
    setOpen((prev) => !prev);
  };

  const defautValues = {
    name: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    country: ''
  };
  const { control, handleSubmit, reset } = useForm({
    defaultValues: defautValues,
    resolver: yupResolver(propertyOwnerSchema)
  });

  const toast = useToast();

  const [postOwner, { isLoading, isError, isSuccess, error }] =
    usePostPropertyOwnerMutation();

  const handleSubmitOwnerInformation = (data) => {
    try {
      const payload = data;
      postOwner({ payload });
    } catch (error) {
      console.error('Failed to submit property owner data', error);
    }
  };

  useEffect(() => {
    if (isError) {
      const errorMessage =
        Object.entries(error.data).toString() ||
        "Failed to submit owner's details";
      toast({
        message: `Status: ${error.status} Message: ${errorMessage}`,
        variant: 'error'
      });
    }
    if (isSuccess) {
      reset();
      handleToggleOwnerDialog();
      toast({ message: 'Saved successfully', variant: 'success' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);
  return (
    <Fragment>
      {iconButton ? (
        <IconButton
          color="secondary"
          size="large"
          onClick={handleToggleOwnerDialog}
          aria-label="add"
        >
          <AddIcon color="secondary" />
        </IconButton>
      ) : (
        <Button
          color="primary"
          variant="outlined"
          onClick={handleToggleOwnerDialog}
        >
          Add Owner
        </Button>
      )}

      <Dialog
        open={open}
        onClose={handleToggleOwnerDialog}
        fullScreen={fullScreen}
        maxWidth="lg"
      >
        {open && (
          <>
            <DialogTitle align="center" color="secondary">
              Add Property Owner Form
            </DialogTitle>

            <form onSubmit={handleSubmit(handleSubmitOwnerInformation)}>
              <DialogContent>
                <Stack spacing={3}>
                  <DialogContentText>
                    <Typography
                      variant="body2"
                      component="span"
                      color="secondary"
                    >
                      Property owner&apos;s include&apos;s but is not limited to
                      listing agents, custodians, owners or caretakers e.t.c
                    </Typography>
                  </DialogContentText>
                  <CustomInputField
                    name="name"
                    control={control}
                    label="Property Owner's Name"
                    size="medium"
                    required
                  />

                  <Stack direction="row" spacing={2}>
                    <CustomInputField
                      name="mobile"
                      control={control}
                      label="Phone Number"
                      size="medium"
                      required
                    />

                    <CustomInputField
                      name="email"
                      control={control}
                      label="Email Address"
                      size="medium"
                      type="email"
                      required
                    />
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <CustomInputField
                      name="address"
                      control={control}
                      label="Physical Location / Address"
                      size="medium"
                      required
                    />

                    <CustomInputField
                      name="city"
                      control={control}
                      label="City"
                      size="medium"
                      required
                    />

                    <CustomInputField
                      name="country"
                      control={control}
                      label="Country"
                      size="medium"
                      required
                    />
                  </Stack>
                </Stack>
              </DialogContent>
              <DialogActions sx={{ pr: 2.5 }}>
                <Button
                  sx={{ color: theme.palette.error.dark }}
                  onClick={handleToggleOwnerDialog}
                  color="secondary"
                >
                  Cancel
                </Button>
                {isLoading ? (
                  <CircularLoader color="primary" />
                ) : (
                  <Button variant="contained" size="small" type="submit">
                    Submit
                  </Button>
                )}
              </DialogActions>
            </form>
          </>
        )}
      </Dialog>
    </Fragment>
  );
}
