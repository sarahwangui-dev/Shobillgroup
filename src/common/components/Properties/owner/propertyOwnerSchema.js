import * as Yup from 'yup';
export const propertyOwnerSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  mobile: Yup.string().required('Phone number is required'),
  email: Yup.string().required('Email is required'),
  address: Yup.string().required('Physical Location is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required')
  //   consultant: Yup.string().required()
});
