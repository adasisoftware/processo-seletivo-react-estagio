import {
  IUpdateAppointmentRepository,
  UpdateAppointmentParams,
} from '../../../controllers/appointment/update-appointment/protocols';
import { prismaClient } from '../../../database/prisma-client';
import { Appointment } from '../../../models/appointment';

export class PrismaUpdateAppointmentRepository
  implements IUpdateAppointmentRepository
{
  async updateAppointment(
    id: string,
    bodyParams: UpdateAppointmentParams,
  ): Promise<Appointment> {
    await prismaClient.appointment.update({
      where: {
        id,
      },
      data: {
        ...bodyParams,
        updatedAt: new Date(),
      },
    });

    const updatedAppointment = await prismaClient.appointment.findUnique({
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

    if (!updatedAppointment) {
      throw new Error('Appointment was not updated.');
    }

    return updatedAppointment;
  }
}
