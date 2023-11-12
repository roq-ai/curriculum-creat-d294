import * as yup from 'yup';

export const proposalValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  submitted_at: yup.date().nullable(),
  status: yup.string().nullable(),
  educator_id: yup.string().nullable().required(),
  content_id: yup.string().nullable().required(),
});
