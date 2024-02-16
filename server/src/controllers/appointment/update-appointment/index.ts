import { Appointment } from '../../../models/appointment';
import { HttpRequest, HttpResponse } from '../../protocols';
import {
  IUpdateAppointmentController,
  IUpdateAppointmentRepository,
} from './protocols';

export class UpdateAppointmentController
  implements IUpdateAppointmentController
{
  constructor(
    private readonly updateAppointmentRepository: IUpdateAppointmentRepository,
  ) {}

  async handle(
    httpRequest: HttpRequest<any>,
  ): Promise<HttpResponse<Appointment>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return {
          statusCode: 400,
          body: 'Missing appointment id.',
        };
      }

      const updatedAppointment =
        await this.updateAppointmentRepository.updateAppointment(
          id,
          httpRequest.body,
        );

      return {
        statusCode: 200,
        body: updatedAppointment,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong.',
      };
    }
  }
}
