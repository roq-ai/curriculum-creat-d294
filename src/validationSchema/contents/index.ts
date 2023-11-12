import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  subject: yup.string().required(),
  grade_level: yup.number().integer().nullable(),
  content_type: yup.string().nullable(),
  creator_id: yup.string().nullable().required(),
});
