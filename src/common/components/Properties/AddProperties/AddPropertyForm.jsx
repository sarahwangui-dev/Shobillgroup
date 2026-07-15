import React, { useState } from 'react';
import CustomInputField from '../../ui-components/CustomInputField';
import {
  Autocomplete,
  Button,
  Grid,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { propertySchema } from '../propertySchema';
import CustomFileField from '../../ui-components/form/CustomFileField';
import PropertyOwnerDialog from '../owner/PropertyOwnerDialog';
import { debounce } from '@/common/utils/debounce';
import {
  useGetPropertyOwnersQuery,
  usePostPropertyMutation
} from '@/common/store/rootApi';
import useToast from '@/common/utils/hooks/useToast';

export default function AddPropertyForm({
  handleClose,
  edit = false,
  defaultValues,
  handleEdit
}) {
  const {
    data: propertyOwners,
    isLoading: isLoadingOwners,
    isError: isErrorOwner,
    error
  } = useGetPropertyOwnersQuery();

  const [postProperty] = usePostPropertyMutation();
  const toast = useToast();

  // eslint-disable-next-line no-unused-vars
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = debounce((term) => {
    setSearchTerm(term.trim());
  }, 300);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(propertySchema)
  });

  const submitPropertyDetails = (data) => {
    if (edit) {
      handleEdit(data);
    } else {
      const payload = {
        name: data.name,
        size_in_hectares: data.size_in_hectares,
        description: data.description,
        price: data.price,
        location: data.location,
        owned_by_id: data.owned_by.id,
        image: data.image
      };

      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, value);
      });
      postProperty(formData)
        .unwrap()
        .then(() => {
          toast({
            message: 'Property added successfully',
            variant: 'success'
          });
          handleClose();
        })
        .catch((error) => {
          toast({
            message: Object.values(error).toString(),
            variant: 'error',
            duration: 1000
          });
        });
    }
  };
  return (
    <form onSubmit={handleSubmit(submitPropertyDetails)}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <CustomInputField
            name="name"
            control={control}
            label="Property Name"
            type="text"
            size="medium"
          />
        </Grid>

        <Grid item xs={12}>
          <CustomInputField
            name="price"
            control={control}
            label="Price"
            type="number"
            size="medium"
          />
        </Grid>

        <Grid item xs={12}>
          <CustomInputField
            name="size_in_hectares"
            control={control}
            label="Size in hectares"
            type="number"
            size="medium"
          />
        </Grid>

        <Grid item xs={12}>
          <CustomInputField
            name="location"
            control={control}
            label="Property Location"
            type="text"
            size="medium"
          />
        </Grid>

        <Grid item xs={12}>
          <Stack direction="row" gap={1}>
            <Controller
              name="owned_by"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  sx={{ width: 350 }}
                  // {...field}
                  options={propertyOwners || []}
                  getOptionLabel={(option) => {
                    return option ? `${option.name}` : '';
                  }}
                  renderInput={(params) => (
                    <>
                      <TextField
                        {...params}
                        label="Search Property Owner"
                        fullWidth
                        error={!!errors.owned_by}
                        helperText={errors.owned_by?.message}
                        onChange={(e) => {
                          handleSearch(e.target.value);
                        }}
                      />
                      {isErrorOwner && (
                        <Typography>
                          Failed to fetch owners {`${error?.data}`}
                        </Typography>
                      )}
                    </>
                  )}
                  onChange={(_, data) => field.onChange(data ? data : '')}
                  isOptionEqualToValue={(option, value) => {
                    // console.log('Autocomplete is option', option, value);
                    return option && value && option.id === value.id;
                  }}
                  loading={isLoadingOwners}
                />
              )}
            />
            <PropertyOwnerDialog iconButton={true} />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <CustomInputField
            name="description"
            control={control}
            label="Property Description"
            type="text"
            size="medium"
            multiline
            minRows={4}
          />
        </Grid>

        <Grid item xs={12} mb={3}>
          <CustomFileField
            name="image"
            type="file"
            label="Property Image"
            control={control}
            fullWidth
          />
        </Grid>

        <Grid xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
