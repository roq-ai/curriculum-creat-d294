import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  comment: yup.string().nullable(),
  rating: yup.number().integer().nullable(),
  reviewed_at: yup.date().nullable(),
  reviewer_id: yup.string().nullable().required(),
  content_id: yup.string().nullable().required(),
});
