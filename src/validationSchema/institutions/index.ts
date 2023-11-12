import * as yup from 'yup';

export const institutionValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  contact_number: yup.string().nullable(),
  website_url: yup.string().nullable(),
  established_year: yup.number().integer().nullable(),
  name: yup.string().required(),
});
