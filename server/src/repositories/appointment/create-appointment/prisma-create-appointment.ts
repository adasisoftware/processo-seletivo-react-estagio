import {
  CreateAppointmentParams,
  ICreateAppointmentRepository,
} from '../../../controllers/appointment/create-appointment/protocols';
import { prismaClient } from '../../../database/prisma-client';
import { Appointment } from '../../../models/appointment';

export class PrismaCreateAppointmentRepository
  implements ICreateAppointmentRepository
{
  async createAppointment(
    bodyParams: CreateAppointmentParams,
  ): Promise<Appointment> {
    const { id } = await prismaClient.appointment.create({
      data: {
        ...bodyParams,
      },
    });

    const createdAppointment = await prismaClient.appointment.findUnique({
      where: {
        id,
      },
      include: {
        patient: {
          select: {
            cpf: true,
          },
        },
      },
    });

    if (!createdAppointment) {
      throw new Error('Appointment was not created.');
    }

    return createdAppointment;
  }
}
