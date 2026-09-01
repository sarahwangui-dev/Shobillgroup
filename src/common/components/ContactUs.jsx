import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Button,
  CircularProgress
} from '@mui/material';
import CustomInputField from './ui-components/CustomInputField';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useToast from '../utils/hooks/useToast';
import useEmailJs from '@/app/utils/hooks/useEmail';

const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_CONTACT_US_TEMPLATE_ID;

const contactUsDefaultValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  company: '',
  title: '',
  message: ''
};

const contactUsValidationSchema = Yup.object({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string().email().required('Please enter your email'),
  phone_number: Yup.string().nullable(),
  company: Yup.string().nullable(),
  title: Yup.string().nullable(),
  message: Yup.string()
    .required('Message cannot be blank')
    .min(
      10,
      'Please add some more context on your message we would really like to hear from you'
    )
    .max(1500, 'Kindly,summarize your message. Thank you')
});

export default function ContactUs() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { sendEmail } = useEmailJs();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: contactUsDefaultValues,
    resolver: yupResolver(contactUsValidationSchema)
  });

  const handleSubmitContactUs = async (data) => {
    setIsLoading(true);

    const templateParams = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_number: data.phone_number,
      company: data.company,
      title: data.title,
      message: data.message
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
          reset(contactUsDefaultValues);
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
    <Container maxWidth="xl">
      <Typography variant="h1" color="secondary" align="center">
        Contact Us
      </Typography>

      <Typography variant="h6" color="secondary" align="center">
        Reach out to us today to schedule your initial consultation
      </Typography>

      <Container maxWidth="md" sx={{ mt: 3, padding: 5 }}>
        <form onSubmit={handleSubmit(handleSubmitContactUs)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputField
                label="First Name"
                name="first_name"
                variant="filled"
                control={control}
                size="medium"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputField
                label="Last Name"
                name="last_name"
                variant="filled"
                control={control}
                type="text"
                size="medium"
                required
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <CustomInputField
                label="Email"
                name="email"
                variant="filled"
                control={control}
                type="email"
                size="medium"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomInputField
                label="Phone Number"
                name="phone_number"
                variant="filled"
                control={control}
                type="number"
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <CustomInputField
                label="Company"
                name="company"
                variant="filled"
                control={control}
                type="text"
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <CustomInputField
                label="Title"
                name="title"
                variant="filled"
                control={control}
                type="text"
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <CustomInputField
                label="Message"
                name="message"
                variant="filled"
                control={control}
                type="text"
                size="medium"
                multiline
                minRows={4}
                required
                error={Boolean(errors.message)}
                helperText={errors.message?.message}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 3
              }}
            >
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  sx={{ minWidth: 200, minHeight: 50 }}
                >
                  Send
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Container>
    </Container>
  );
}
