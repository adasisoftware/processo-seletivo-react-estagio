import { HttpRequest, HttpResponse } from '../../protocols';
import { Patient } from '../../../models/patient';

export interface IGetPatientsController {
  handle(httpRequest?: HttpRequest<any>): Promise<HttpResponse<Patient[]>>;
}

export interface IGetPatientsRepository {
  getPatients(queryParams?: any): Promise<Patient[]>;
}
