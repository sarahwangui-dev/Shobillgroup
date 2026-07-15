import { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Box,
  Button,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { icons } from '@/common/utils/icons';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useToast from '@/common/utils/hooks/useToast';
import { signUpUser, navigate } from '../actions';
import CircularLoader from '@/common/components/ui-components/cards/CircularLoader';

// Icons
const VisibilityIcon = icons.VisibilityIcon;
const VisibilityOffIcon = icons.VisibilityOffIcon;

const customRegistrationSchema = Yup.object({
  email: Yup.string().required('Please enter your email address'),
  password: Yup.string()
    .required('Please enter your password')
    .min(8, 'Password must be at least 8 characters long ')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  //   password2: Yup.string()
  //     .oneOf([Yup.ref('password1'), null], 'Passwords must match')
  //     .required('Please confirm your password')
});

export default function SignupForm() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: { email: null, password: null },
    resolver: yupResolver(customRegistrationSchema)
  });

  const onSubmitRegistrationCredentials = async (data) => {
    setIsLoading(true);
    const { details, error } = await signUpUser(data);
    if (error) {
      toast({ message: Object.values(error).toString(), variant: 'error' });
      setIsLoading(false);
    } else {
      toast({ message: Object.values(details).toString(), variant: 'success' });
      setTimeout(() => {
        setIsLoading(false);
        reset();
        navigate(`/login`);
      }, 1000);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmitRegistrationCredentials)}>
      <FormControl
        {...register('email')}
        fullWidth
        required
        error={errors.email}
        sx={{ ...theme.typography.customInput, mb: 3 }}
      >
        <InputLabel>Email Address</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email-login"
          type="email"
          name="email"
          label="Email Address"
        />
        <FormHelperText error>{errors?.email?.message}</FormHelperText>
      </FormControl>

      <FormControl
        {...register('password')}
        fullWidth
        required
        error={errors.password1}
        sx={{ ...theme.typography.customInput, mb: 3 }}
      >
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="large"
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        <FormHelperText error>{errors?.password?.message}</FormHelperText>
      </FormControl>

      {/* <FormControl
        fullWidth
        required
        error={!!errors.password2}
        sx={{ ...theme.typography.customInput }}
      >
        <InputLabel>Confirm Password</InputLabel>
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          name="password2"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="large"
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirm Password"
          {...register('password2')}
        />
        <FormHelperText error>{errors?.password2?.message}</FormHelperText>
      </FormControl> */}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Typography variant="caption" color="secondary">
          By creating an account you agree with our terms and conditions
        </Typography>
      </Stack>

      <Box sx={{ mt: 2 }}>
        {isLoading ? (
          <CircularLoader color="primary" />
        ) : (
          <Button
            disableElevation
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        )}
      </Box>
    </form>
  );
}
