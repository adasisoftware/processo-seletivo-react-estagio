import { HttpRequest, HttpResponse } from '../../protocols';
import { Patient } from '../../../models/patient';

export interface CreatePatientParams {
  cpf: string;
  fullName: string;
  birthday: Date;
  sex: 'MALE' | 'FEMALE';
}

export interface ICreatePatientController {
  handle(
    httpRequest: HttpRequest<CreatePatientParams>,
  ): Promise<HttpResponse<Patient>>;
}

export interface ICreatePatientRepository {
  createPatient(bodyParams: CreatePatientParams): Promise<Patient>;
}
