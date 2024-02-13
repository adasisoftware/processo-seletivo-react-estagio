import { Form, Field, Formik, FormikHelpers } from 'formik';
import { Button, Container } from 'react-bootstrap';
import GenericInputGroup from '../generic-input-group';
import { AppointmentFormValues } from '../../types/appointment-form-values';
import { appointmentFormValidationSchema } from '../../utils/validation-schemas/appointment-form';
import EditBookingTimeInput from './edit-booking-time-input';
import { AppointmentData } from '../../types/appointment-data';

type EditAppointmentFormProps = {
  selectedAppointment: AppointmentData;
};

export default function EditAppointmentForm({
  selectedAppointment,
}: EditAppointmentFormProps) {
  const initialValues: AppointmentFormValues = {
    patientCpf: selectedAppointment.patientCPF,
    patientFullName: selectedAppointment.patientFullName,
    type: selectedAppointment.type,
    bookingDate: selectedAppointment.bookingDate,
    bookingTime: selectedAppointment.bookingTime,
  };

  function handleFormSubmit(
    values: AppointmentFormValues,
    { setSubmitting }: FormikHelpers<AppointmentFormValues>,
  ) {
    console.log(values);
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={appointmentFormValidationSchema}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <Container className="d-flex flex-column gap-4">
            <Container>
              <GenericInputGroup
                name="patientCpf"
                id="patientCpf"
                labelText="CPF do paciente (apenas números)"
                required
                placeholder="XXX.XXX.XXX-XX"
              />
            </Container>

            <Container>
              <GenericInputGroup
                name="patientFullName"
                id="patientFullName"
                labelText="Nome completo do paciente"
                required
                value={selectedAppointment.patientFullName}
              />
            </Container>

            <Container>
              <label htmlFor="type" className="form-label">
                Tipo de consulta<span className="text-danger fs-5"> *</span>
              </label>
              <div className="form-check">
                <label className="form-check-label">
                  <Field
                    name="type"
                    id="typeCardiology"
                    type="radio"
                    value="cardiology"
                    className="form-check-input"
                  />
                  Cardiologia
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <Field
                    name="type"
                    id="typeGeneral"
                    type="radio"
                    value="general"
                    className="form-check-input"
                  />
                  Clínica Médica
                </label>
              </div>
            </Container>

            <Container>
              <GenericInputGroup
                name="bookingDate"
                id="bookingDate"
                type="date"
                labelText="Data da consulta"
                required
              />
            </Container>

            <Container>
              <EditBookingTimeInput />
            </Container>

            <Container>
              <Button
                type="submit"
                disabled={isSubmitting || values.bookingTime === ''}
              >
                Salvar consulta
              </Button>
            </Container>
          </Container>
        </Form>
      )}
    </Formik>
  );
}
