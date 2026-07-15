'use client';
import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  useMediaQuery,
  Grid,
  Typography,
  DialogTitle,
  IconButton,
  Box,
  Divider,
  DialogActions,
  CircularProgress
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { icons } from '@/common/utils/icons';
import { useForm } from 'react-hook-form';
import CustomInputField from '../CustomInputField';
import useToast from '@/common/utils/hooks/useToast';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useEmailJs from '@/app/utils/hooks/useEmail';

const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_PROPERTY_TEMPLATE_ID;

const HomeIcon = icons.HomeIcon;
const CloseIcon = icons.CloseIcon;
const SendIcon = icons.SendIcon;

const defaultValues = {
  full_name: '',
  email: '',
  phone_number: ''
};

const validationSchema = Yup.object({
  full_name: Yup.string().required('Name is required'),
  email: Yup.string().email().required('Please provide your email'),
  phone_number: Yup.string().required('Please provide your phone number')
});

export default function InitiateConsultationDialog({ property }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { control, handleSubmit, reset } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema)
  });
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const { sendEmail } = useEmailJs();

  const submitConsultation = async (data) => {
    setIsLoading(true);

    const templateParams = {
      full_name: data['full_name'],
      email: data['email'],
      phone_number: data['phone_number'],
      property: property?.name
    };

    const response = await sendEmail(TEMPLATE_ID, templateParams);

    try {
      if (response.success) {
        toast({
          message:
            'Message submitted successfully! We shall be in touch soonest, Thank you',
          variant: 'success',
          duration: 2500
        });
        setTimeout(() => {
          reset(defaultValues);
          handleClose();
          setIsLoading(false);
        }, 500);
      } else {
        toast({
          message:
            'Failed! If this persists reach out to us via email on the footer section',
          variant: 'error',
          duration: 4000
        });
        setIsLoading(false);
      }
    } catch (error) {
      toast({
        message: 'An unexpected error occured. Please try again later.',
        variant: 'error'
      });
    }
  };
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        onClick={handleClickOpen}
      >
        Initiate Consultation
      </Button>
      <Dialog
        fullScreen={fullScreen}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
      >
        {open && (
          <form onSubmit={handleSubmit(submitConsultation)}>
            <DialogTitle
              sx={{
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2
              }}
            >
              <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                Schedule Your Consultation
              </Typography>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 3, mt: 2 }}>
              <Box>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        p: 2,
                        bgcolor: 'action.hover',
                        borderRadius: 1
                      }}
                    >
                      <HomeIcon color="secondary" sx={{ mr: 1 }} />
                      <Typography variant="subtitle1">
                        Property: {property?.name || 'Selected Property'}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Personal Infomation
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                  </Grid>

                  <Grid item xs={12}>
                    <CustomInputField
                      label="Full Name"
                      name="full_name"
                      control={control}
                      type="text"
                      size="medium"
                      required
                      variant="filled"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <CustomInputField
                      label="Email Address"
                      name="email"
                      control={control}
                      type="email"
                      size="medium"
                      required
                      variant="filled"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <CustomInputField
                      label="Phone Number"
                      name="phone_number"
                      control={control}
                      type="text"
                      size="medium"
                      variant="filled"
                      required
                    />
                  </Grid>
                </Grid>
              </Box>
            </DialogContent>

            <DialogActions sx={{ px: 3, py: 2, bgcolor: 'background.default' }}>
              <Button
                onClick={handleClose}
                color="inherit"
                variant="outlined"
                sx={{ borderRadius: 2 }}
              >
                Cancel
              </Button>

              {isLoading ? (
                <CircularProgress color="secondary" />
              ) : (
                <Button
                  color="secondary"
                  variant="contained"
                  disableElevation
                  type="submit"
                  startIcon={<SendIcon />}
                  sx={{ borderRadius: 2 }}
                >
                  Submit
                </Button>
              )}
            </DialogActions>
          </form>
        )}
      </Dialog>
    </div>
  );
}
