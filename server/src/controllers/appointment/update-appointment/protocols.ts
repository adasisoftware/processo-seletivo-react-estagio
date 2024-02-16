import { HttpRequest, HttpResponse } from '../../protocols';
import { Appointment } from '../../../models/appointment';

export interface UpdateAppointmentParams {
  type: string;
  bookingDate: Date;
  bookingTime: string;
}

export interface IUpdateAppointmentController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Appointment>>;
}

export interface IUpdateAppointmentRepository {
  updateAppointment(
    id: string,
    bodyParams: UpdateAppointmentParams,
  ): Promise<Appointment>;
}
