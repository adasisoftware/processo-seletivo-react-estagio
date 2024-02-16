import { FormEvent, useState } from 'react';
import { Form, Field, Formik, FormikHelpers } from 'formik';
import { Button, Container } from 'react-bootstrap';
import GenericInputGroup from '../generic-input-group';
import { AppointmentFormValues } from '../../types/appointment-form-values';
import { appointmentFormValidationSchema } from '../../utils/validation-schemas/appointment-form';
import BookingTimeInput from './booking-time-input';
import { BASE_URL } from '../../api';
import { PatientData } from '../../types/patient-data';
import { add, format } from 'date-fns';

export default function BookAppointmentForm() {
  const initialValues: AppointmentFormValues = {
    patientCpf: '',
    type: '',
    bookingDate: '',
    bookingTime: '',
  };

  const [selectedPatient, setSelectedPatient] = useState<PatientData | null>(
    null,
  );

  async function checkIfPatientExists(event: FormEvent) {
    const cpfInputValue = (event!.target as HTMLInputElement)!.value;

    if (!(cpfInputValue.length === 11)) return;

    const response = await fetch(`${BASE_URL}/patients?cpf=${cpfInputValue}`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    });

    const patientData = await response.json();

    if (!patientData[0]) {
      setSelectedPatient(null);
    }

    setSelectedPatient(patientData[0]);
  }

  async function handleFormSubmit(
    values: AppointmentFormValues,
    { setSubmitting }: FormikHelpers<AppointmentFormValues>,
  ) {
    setSubmitting(true);

    await fetch(`${BASE_URL}/appointments`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        patientId: selectedPatient?.id,
        type: values.type,
        bookingDate: new Date(values.bookingDate),
        bookingTime: values.bookingTime,
      }),
    });

    setSubmitting(false);

    window.location.reload();
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
                maxLength={11}
                onInput={checkIfPatientExists}
              />
            </Container>

            {selectedPatient ? (
              <>
                <Container className="d-flex flex-row gap-4">
                  <p>{selectedPatient.fullName}</p>
                  <p>
                    {format(
                      add(selectedPatient.birthday, { hours: 4 }),
                      'dd-MM-yyyy',
                    )}
                  </p>
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
                  <BookingTimeInput />
                </Container>

                <Container>
                  <Button
                    type="submit"
                    disabled={isSubmitting || values.bookingTime === ''}
                  >
                    Salvar consulta
                  </Button>
                </Container>
              </>
            ) : (
              <p>Digite um CPF de um paciente já cadastrado.</p>
            )}
          </Container>
        </Form>
      )}
    </Formik>
  );
}
