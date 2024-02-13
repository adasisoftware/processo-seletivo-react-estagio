import * as Yup from 'yup';

export const patientFormValidationSchema = Yup.object({
  cpf: Yup.string().length(11, 'CPF inválido!').required('Campo obrigatório!'),
  fullName: Yup.string()
    .max(300, 'Nome completo muito extenso!')
    .required('Campo obrigatório!'),
  birthday: Yup.date()
    .max(new Date(), 'Data inválida!')
    .required('Campo obrigatório!'),
  sex: Yup.string<'M' | 'F'>().required('Campo obrigatório!'),
});
