import * as yup from 'yup';

export const curriculumValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  admin_id: yup.string().nullable().required(),
});
