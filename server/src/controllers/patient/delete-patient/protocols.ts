import { Patient } from '../../../models/patient';
import { HttpRequest, HttpResponse } from '../../protocols';

export interface IDeletePatientController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Patient>>;
}

export interface IDeletePatientRepository {
  deletePatient(id: string): Promise<Patient>;
}
