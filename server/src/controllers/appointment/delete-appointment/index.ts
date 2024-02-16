import { Appointment } from '../../../models/appointment';
import { HttpRequest, HttpResponse } from '../../protocols';
import {
  IDeleteAppointmentController,
  IDeleteAppointmentRepository,
} from './protocols';

export class DeleteAppointmentController
  implements IDeleteAppointmentController
{
  constructor(
    private readonly deleteAppointmentRepository: IDeleteAppointmentRepository,
  ) {}

  async handle(
    httpRequest: HttpRequest<any>,
  ): Promise<HttpResponse<Appointment>> {
    try {
      const id = httpRequest?.params.id;

      if (!id) {
        return {
          statusCode: 400,
          body: 'Missing appointment id.',
        };
      }

      const deletedAppointment =
        await this.deleteAppointmentRepository.deleteAppointment(id);

      return {
        statusCode: 200,
        body: deletedAppointment,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong.',
      };
    }
  }
}
