import { Patient } from '../../../models/patient';
import { HttpRequest, HttpResponse } from '../../protocols';
import {
  IUpdatePatientController,
  IUpdatePatientRepository,
} from './protocols';

export class UpdatePatientController implements IUpdatePatientController {
  constructor(
    private readonly updatePatientRepository: IUpdatePatientRepository,
  ) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Patient>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return {
          statusCode: 400,
          body: 'Missing patient id.',
        };
      }

      const updatedPatient = await this.updatePatientRepository.updatePatient(
        id,
        httpRequest.body,
      );

      return {
        statusCode: 200,
        body: updatedPatient,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong.',
      };
    }
  }
}
