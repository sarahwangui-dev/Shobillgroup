import { FormControl, FormHelperText, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function CustomSelectField({
  // eslint-disable-next-line no-unused-vars
  options,
  name,
  control,
  fullWidth,
  label,
  children,
  ...otherProps
}) {
  return (
    <FormControl fullWidth={fullWidth}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, ...fields }, fieldState: { error } }) => (
          <>
            <TextField
              {...fields}
              id={name}
              select
              fullWidth
              size="small"
              label={label}
              onChange={onChange}
              {...otherProps}
              error={error}
            >
              {children}
            </TextField>
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </>
        )}
      />
    </FormControl>
  );
}
