import { IDeleteAppointmentRepository } from '../../../controllers/appointment/delete-appointment/protocols';
import { prismaClient } from '../../../database/prisma-client';
import { Appointment } from '../../../models/appointment';

export class PrismaDeleteAppointmentRepository
  implements IDeleteAppointmentRepository
{
  async deleteAppointment(id: string): Promise<Appointment> {
    const deletedAppointment = await prismaClient.appointment.findUnique({
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

    if (!deletedAppointment) {
      throw new Error('Appointment was not found.');
    }

    await prismaClient.patient.delete({
      where: {
        id,
      },
    });

    return deletedAppointment;
  }
}
