import React, { Fragment } from 'react';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function CustomInputField(props) {
  const {
    type,
    control,
    name,
    label,
    variant,
    size,
    mb = '1rem',
    color,
    ...otherProps
  } = props;

  return (
    <FormControl fullWidth sx={{ mb }}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error }
        }) => {
          return (
            <Fragment>
              <TextField
                type={type}
                id={name}
                fullWidth
                size={size ? size : 'small'}
                label={label}
                variant={variant}
                value={value}
                onChange={
                  type === 'file'
                    ? (event) => {
                        onChange(event.target.files[0]);
                      }
                    : onChange
                }
                onBlur={onBlur}
                error={!!error}
                color={color}
                {...otherProps}
              />
              {error && <FormHelperText error>{error.message}</FormHelperText>}
            </Fragment>
          );
        }}
      />
    </FormControl>
  );
}
