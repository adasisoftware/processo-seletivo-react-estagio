import { HttpRequest, HttpResponse } from '../../protocols';
import { Patient } from '../../../models/patient';
import { IGetPatientsController, IGetPatientsRepository } from './protocols';
import { isObjectEmpty } from '../../../utils/is-object-empty';

export class GetPatientsController implements IGetPatientsController {
  constructor(private readonly getPatientsRepository: IGetPatientsRepository) {}

  async handle(
    httpRequest?: HttpRequest<any>,
  ): Promise<HttpResponse<Patient[]>> {
    try {
      const { query } = httpRequest;

      if (isObjectEmpty(query)) {
        const patients = await this.getPatientsRepository.getPatients();
        return {
          statusCode: 200,
          body: patients,
        };
      }

      const patients = await this.getPatientsRepository.getPatients(query);

      return {
        statusCode: 200,
        body: patients,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong.',
      };
    }
  }
}
