import * as Yup from 'yup';
export const propertySchema = Yup.object().shape({
  name: Yup.string().required('Property name is required'),
  size_in_hectares: Yup.number().required('Property size is required'),
  description: Yup.string().required('Property size in hectares is requried'),
  price: Yup.number().required('Property price is requried'),
  location: Yup.string().required('Property location is required'),
  owned_by: Yup.object({ name: Yup.string().required() }).required(
    'Please select property owner'
  )
  //   posted_by: Yup.number().required('Agent is required')
});
