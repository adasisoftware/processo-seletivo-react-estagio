import { HttpRequest, HttpResponse } from '../../protocols';
import { Appointment } from '../../../models/appointment';

export interface IDeleteAppointmentController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Appointment>>;
}

export interface IDeleteAppointmentRepository {
  deleteAppointment(id: string): Promise<Appointment>;
}
