import { Form, Field, Formik, FormikHelpers } from 'formik';
import { Button, Container } from 'react-bootstrap';
import GenericInputGroup from '../generic-input-group';
import { patientFormValidationSchema } from '../../utils/validation-schemas/patient-form';
import { PatientFormValues } from '../../types/patient-form-values';
import { BASE_URL } from '../../api';
import { add, format } from 'date-fns';
import { PatientDataRow } from '../../constants/patient-table-columns';

type EditPatientFormProps = {
  selectedPatient: PatientDataRow;
};

export default function EditPatientForm({
  selectedPatient,
}: EditPatientFormProps) {
  const initialValues: PatientFormValues = {
    cpf: selectedPatient.cpf,
    fullName: selectedPatient.fullName,
    birthday: format(add(selectedPatient.birthday, { hours: 4 }), 'yyyy-MM-dd'),
    sex: selectedPatient.sex,
  };

  async function handleFormSubmit(
    values: PatientFormValues,
    { setSubmitting }: FormikHelpers<PatientFormValues>,
  ) {
    setSubmitting(true);

    await fetch(`${BASE_URL}/patients/${selectedPatient.id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        cpf: values.cpf,
        fullName: values.fullName,
        birthday: new Date(values.birthday),
        sex: values.sex,
      }),
    });

    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={patientFormValidationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Container className="d-flex flex-column gap-4">
            <Container>
              <GenericInputGroup
                name="cpf"
                id="cpf"
                labelText="CPF (apenas números)"
                required
                placeholder="XXX.XXX.XXX-XX"
              />
            </Container>
            <Container>
              <GenericInputGroup
                name="fullName"
                id="fullName"
                labelText="Nome completo"
                required
              />
            </Container>

            <Container></Container>
            <GenericInputGroup
              name="birthday"
              id="birthday"
              type="date"
              labelText="Data de nascimento"
              required
            />

            <Container>
              <label htmlFor="sex" className="form-label">
                Sexo<span className="text-danger fs-5"> *</span>
              </label>
              <div className="form-check">
                <label className="form-check-label">
                  <Field
                    name="sex"
                    id="sexM"
                    type="radio"
                    value="MALE"
                    className="form-check-input"
                  />
                  Masculino
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <Field
                    name="sex"
                    id="sexF"
                    type="radio"
                    value="FEMALE"
                    className="form-check-input"
                  />
                  Feminino
                </label>
              </div>
            </Container>
            <Container>
              <Button type="submit" disabled={isSubmitting}>
                Salvar
              </Button>
            </Container>
          </Container>
        </Form>
      )}
    </Formik>
  );
}
