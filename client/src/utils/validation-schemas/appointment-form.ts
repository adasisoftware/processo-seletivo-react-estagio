import * as Yup from 'yup';

export const appointmentFormValidationSchema = Yup.object({
  patientCpf: Yup.string()
    .length(11, 'CPF inválido!')
    .required('Campo obrigatório!'),
  type: Yup.string<'cardiology' | 'general'>().required('Campo obrigatório!'),
  bookingDate: Yup.date()
    .min(new Date(), 'Data inválida!')
    .required('Campo obrigatório!'),
  bookingTime: Yup.string().required('Campo obrigatório!'),
});
