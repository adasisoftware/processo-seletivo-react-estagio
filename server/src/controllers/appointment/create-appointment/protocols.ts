import { HttpRequest, HttpResponse } from '../../protocols';
import { Appointment } from '../../../models/appointment';

export interface CreateAppointmentParams {
  type: string;
  bookingDate: Date;
  bookingTime: string;
  patientId: string;
}

export interface ICreateAppointmentController {
  handle(
    httpRequest: HttpRequest<CreateAppointmentParams>,
  ): Promise<HttpResponse<Appointment>>;
}

export interface ICreateAppointmentRepository {
  createAppointment(bodyParams: CreateAppointmentParams): Promise<Appointment>;
}
