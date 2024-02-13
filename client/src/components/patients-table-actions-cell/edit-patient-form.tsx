import { Form, Field, Formik, FormikHelpers } from 'formik';
import { Button } from 'react-bootstrap';
import GenericInputGroup from '../generic-input-group';
import { patientFormValidationSchema } from '../../utils/validation-schemas/patient-form';
import { PatientData } from '../../types/patient-data';
import { PatientFormValues } from '../../types/patient-form-values';

type EditPatientFormProps = {
  selectedPatient: PatientData;
};

export default function EditPatientForm({
  selectedPatient,
}: EditPatientFormProps) {
  const initialValues: PatientFormValues = {
    cpf: selectedPatient.cpf,
    fullName: selectedPatient.fullName,
    birthday: selectedPatient.birthday,
    sex: selectedPatient.sex,
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
          <GenericInputGroup
            name="cpf"
            id="cpf"
            labelText="CPF (apenas números)"
            required
            placeholder="XXX.XXX.XXX-XX"
          />

          <GenericInputGroup
            name="fullName"
            id="fullName"
            labelText="Nome completo"
            required
          />

          <GenericInputGroup
            name="birthday"
            id="birthday"
            type="date"
            labelText="Data de nascimento"
            required
          />

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

          <div>
            <Button type="submit" disabled={isSubmitting}>
              Salvar
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
