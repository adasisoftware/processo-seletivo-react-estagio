import { Patient } from '../../../models/patient';
import { HttpRequest, HttpResponse } from '../../protocols';

export interface UpdatePatientParams {
  cpf?: string;
  fullName?: string;
  birthday?: Date;
  sex?: 'MALE' | 'FEMALE';
}

export interface IUpdatePatientController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Patient>>;
}

export interface IUpdatePatientRepository {
  updatePatient(id: string, bodyParams: UpdatePatientParams): Promise<Patient>;
}
