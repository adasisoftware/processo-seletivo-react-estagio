import { HttpRequest, HttpResponse } from '../../protocols';
import { Patient } from '../../../models/patient';
import {
  CreatePatientParams,
  ICreatePatientController,
  ICreatePatientRepository,
} from './protocols';

export class CreatePatientController implements ICreatePatientController {
  constructor(
    private readonly createPatientRepository: ICreatePatientRepository,
  ) {}

  async handle(
    httpRequest: HttpRequest<CreatePatientParams>,
  ): Promise<HttpResponse<Patient>> {
    try {
      const { body } = httpRequest;

      if (!body) {
        return {
          statusCode: 400,
          body: 'Please, specify a body.',
        };
      }

      const requiredFields = ['cpf', 'fullName', 'birthday', 'sex'];

      for (const field of requiredFields) {
        if (!body[field as keyof CreatePatientParams])
          return {
            statusCode: 400,
            body: `Field ${field} is required.`,
          };
      }

      const patient = await this.createPatientRepository.createPatient(body);

      return {
        statusCode: 201,
        body: patient,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong.',
      };
    }
  }
}
