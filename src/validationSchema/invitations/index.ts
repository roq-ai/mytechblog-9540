import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  expiry_date: yup.date().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
