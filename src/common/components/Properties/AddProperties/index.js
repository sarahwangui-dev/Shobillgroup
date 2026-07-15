'use client';
import React, { Fragment, useState } from 'react';
import { Button } from '@mui/material';
import RightDrawer from '../../ui-components/drawer';
import AddPropertyForm from './AddPropertyForm';

export default function AddProperty() {
  const [open, setOpen] = useState(false);

  const toggleAddPropertyDrawer = () => {
    setOpen((prev) => !prev);
  };

  const defaultValues = {
    name: '',
    size_in_hectares: 0,
    description: '',
    price: 0,
    image: null,
    location: '',
    owned_by: null,
    posted_by: 1
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={toggleAddPropertyDrawer}>
        Add property
      </Button>

      <RightDrawer
        open={open}
        title="Add Property"
        handleDrawerOpen={toggleAddPropertyDrawer}
      >
        <AddPropertyForm
          handleClose={toggleAddPropertyDrawer}
          defaultValues={defaultValues}
        />
      </RightDrawer>
    </Fragment>
  );
}
