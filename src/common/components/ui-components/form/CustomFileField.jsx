import React, { useRef } from 'react';
import { Controller } from 'react-hook-form';
import { Button, FormControl, FormHelperText, Typography } from '@mui/material';

import { icons } from '@/common/utils/icons';

const { CloudUploadIcon } = icons;

export default function CustomFileField({
  control,
  name,
  label,
  type = 'file',
  fullWidth,
  displayError,
  accept = 'image/png, image/gif, image/jpeg',
  ...otherProps
}) {
  const hiddenFileInput = useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  return (
    <FormControl fullWidth={fullWidth}>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value, ...fields },
          fieldState: { error }
        }) => (
          <>
            <Button
              variant="outlined"
              color="primary"
              sx={{ color: 'primary !important' }}
              onClick={handleClick}
              startIcon={<CloudUploadIcon />}
            >
              Upload {label}
            </Button>
            <input
              {...fields}
              type={type}
              style={{ display: 'none' }}
              accept={accept}
              ref={hiddenFileInput}
              onChange={(event) => {
                const file = event.target.files[0];
                onChange(file);
              }}
              onBlur={onBlur}
              {...otherProps}
            />
            {value && value?.name && (
              <Typography variant="subtitle2" marginTop={1} color="secondary">
                {value?.name}
              </Typography>
            )}
            {error && displayError && (
              <FormHelperText error>{error.message}</FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  );
}
