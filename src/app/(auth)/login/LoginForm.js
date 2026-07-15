import { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Box,
  Button,
  Link
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { icons } from '@/common/utils/icons';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginUser, setAccessToken } from '../actions';
import useToast from '@/common/utils/hooks/useToast';
import CircularLoader from '@/common/components/ui-components/cards/CircularLoader';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '@/common/store/auth/authSlice';
import { useRouter } from 'next/navigation';

// Icons
const VisibilityIcon = icons.VisibilityIcon;
const VisibilityOffIcon = icons.VisibilityOffIcon;

const customLoginSchema = Yup.object({
  email: Yup.string().required('Please enter your email address'),
  password: Yup.string()
    .required('Please enter your password')
    .min(8, 'Password must be at least 8 characters long ')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
});

export default function LoginForm() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const router = useRouter();

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
    resolver: yupResolver(customLoginSchema)
  });

  const onSubmitLoginCredentials = async (data) => {
    setIsLoading(true);
    const { details, error } = await loginUser(data);

    if (error) {
      toast({ message: Object.values(error).toString(), variant: 'error' });
      setIsLoading(false);
    } else {
      setAccessToken(details.access_token);
      dispatch(setLoggedIn());
      toast({
        message: 'Login Success',
        variant: 'success'
      });
      setTimeout(() => {
        reset();
        router.push('/dashboard');
        setIsLoading(false);
      }, 500);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmitLoginCredentials)}>
      <FormControl
        {...register('email')}
        fullWidth
        required
        error={errors.email}
        sx={{ ...theme.typography.customInput, mb: 3 }}
      >
        <InputLabel>Email Address</InputLabel>
        <OutlinedInput type="email" name="email" label="Email Address" />
        <FormHelperText error>{errors?.email?.message}</FormHelperText>
      </FormControl>

      <FormControl
        {...register('password')}
        fullWidth
        required
        error={errors.password}
        sx={{ ...theme.typography.customInput, mb: 1 }}
      >
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password-login"
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

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="end"
        spacing={1}
      >
        {/* <FormControlLabel
            control={
              <CheckBox
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                name="checked"
                color="primary"
              />
            }
            label="Remember me"
          /> */}
        <Typography
          variant="subtitle1"
          component={Link}
          href="#"
          color="secondary"
          sx={{ textDecoration: 'none' }}
        >
          Forgot password?
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
            Sign in
          </Button>
        )}
      </Box>
    </form>
  );
}
