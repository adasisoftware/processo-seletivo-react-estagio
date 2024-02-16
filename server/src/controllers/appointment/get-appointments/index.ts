import { Appointment } from '../../../models/appointment';
import { isObjectEmpty } from '../../../utils/is-object-empty';
import { HttpRequest, HttpResponse } from '../../protocols';
import {
  IGetAppointmentsController,
  IGetAppointmentsRepository,
} from './protocols';

export class GetAppointmentsController implements IGetAppointmentsController {
  constructor(
    private readonly getAppointmentsRepository: IGetAppointmentsRepository,
  ) {}

  async handle(
    httpRequest?: HttpRequest<any>,
  ): Promise<HttpResponse<Appointment[]>> {
    try {
      const { query } = httpRequest;

      if (isObjectEmpty(query)) {
        const patients = await this.getAppointmentsRepository.getAppointments();
        return {
          statusCode: 200,
          body: patients,
        };
      }

      const appointments =
        await this.getAppointmentsRepository.getAppointments(query);

      return {
        statusCode: 200,
        body: appointments,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong.',
      };
    }
  }
}
