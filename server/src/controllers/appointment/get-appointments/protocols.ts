import { HttpRequest, HttpResponse } from '../../protocols';
import { Appointment } from '../../../models/appointment';

export interface IGetAppointmentsController {
  handle(httpRequest?: HttpRequest<any>): Promise<HttpResponse<Appointment[]>>;
}

export interface IGetAppointmentsRepository {
  getAppointments(queryParams?: any): Promise<Appointment[]>;
}
