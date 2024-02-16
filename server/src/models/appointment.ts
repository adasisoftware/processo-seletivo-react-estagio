export type Appointment = { patient: { cpf: string } } & {
  id: string;
  type: string;
  bookingDate: Date;
  bookingTime: string;
  createdAt?: Date;
  updatedAt?: Date;
  patientId: string;
};
