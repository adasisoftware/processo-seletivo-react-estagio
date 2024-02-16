import { Appointment } from '../../../models/appointment';
import { HttpRequest, HttpResponse } from '../../protocols';
import {
  CreateAppointmentParams,
  ICreateAppointmentController,
  ICreateAppointmentRepository,
} from './protocols';

export class CreateAppointmentController
  implements ICreateAppointmentController
{
  constructor(
    private readonly createAppointmentRepository: ICreateAppointmentRepository,
  ) {}

  async handle(
    httpRequest: HttpRequest<CreateAppointmentParams>,
  ): Promise<HttpResponse<Appointment>> {
    try {
      const { body } = httpRequest;

      if (!body) {
        return {
          statusCode: 400,
          body: 'Please, specify a body.',
        };
      }

      const requiredFields = [
        'type',
        'bookingDate',
        'bookingTime',
        'patientId',
      ];

      for (const field of requiredFields) {
        if (!body[field as keyof CreateAppointmentParams])
          return {
            statusCode: 400,
            body: `Field ${field} is required.`,
          };
      }

      const createdAppointment =
        await this.createAppointmentRepository.createAppointment(body);

      return {
        statusCode: 201,
        body: createdAppointment,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong.',
      };
    }
  }
}
