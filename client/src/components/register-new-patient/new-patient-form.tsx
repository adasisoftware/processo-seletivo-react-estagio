import { Form, Field, Formik, FormikHelpers } from 'formik';
import { Button, Container } from 'react-bootstrap';
import GenericInputGroup from '../generic-input-group';
import { patientFormValidationSchema } from '../../utils/validation-schemas/patient-form';
import { PatientFormValues } from '../../types/patient-form-values';

export default function NewPatientForm() {
  const initialValues: PatientFormValues = {
    cpf: '',
    fullName: '',
    birthday: '',
    sex: '',
  };

  function handleFormSubmit(
    values: PatientFormValues,
    { setSubmitting }: FormikHelpers<PatientFormValues>,
  ) {
    console.log(values);
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

            <Container>
              <GenericInputGroup
                name="birthday"
                id="birthday"
                type="date"
                labelText="Data de nascimento"
                required
              />
            </Container>

            <Container>
              <div>
                <label htmlFor="sex" className="form-label">
                  Sexo<span className="text-danger fs-5"> *</span>
                </label>
                <div className="form-check">
                  <label className="form-check-label">
                    <Field
                      name="sex"
                      id="sexM"
                      type="radio"
                      value="M"
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
                      value="F"
                      className="form-check-input"
                    />
                    Feminino
                  </label>
                </div>
              </div>
            </Container>

            <Container>
              <Button type="submit" disabled={isSubmitting}>
                Salvar paciente
              </Button>
            </Container>
          </Container>
        </Form>
      )}
    </Formik>
  );
}
