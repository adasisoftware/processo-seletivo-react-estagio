import { Patient } from '../../../models/patient';
import { HttpRequest, HttpResponse } from '../../protocols';
import {
  IDeletePatientController,
  IDeletePatientRepository,
} from './protocols';

export class DeletePatientController implements IDeletePatientController {
  constructor(
    private readonly deletePatientRepository: IDeletePatientRepository,
  ) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Patient>> {
    try {
      const id = httpRequest?.params.id;

      if (!id) {
        return {
          statusCode: 400,
          body: 'Missing patient id.',
        };
      }

      const deletedPatient =
        await this.deletePatientRepository.deletePatient(id);

      return {
        statusCode: 200,
        body: deletedPatient,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong.',
      };
    }
  }
}
