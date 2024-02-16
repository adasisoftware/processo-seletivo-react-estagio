import { IGetAppointmentsRepository } from '../../../controllers/appointment/get-appointments/protocols';
import { prismaClient } from '../../../database/prisma-client';
import { Appointment } from '../../../models/appointment';

export class PrismaGetAppointmentsRepository
  implements IGetAppointmentsRepository
{
  async getAppointments(queryParams?: any): Promise<Appointment[]> {
    if (!queryParams) {
      const appointments = await prismaClient.appointment.findMany({
        include: {
          patient: {
            select: {
              cpf: true,
            },
          },
        },
      });
      return appointments;
    }

    const { month, year, type, bookingDate } = queryParams;

    if (type && bookingDate) {
      const appointments = await prismaClient.appointment.findMany({
        where: {
          AND: [
            {
              type: {
                equals: type,
              },
            },
            {
              bookingDate: {
                equals: new Date(bookingDate),
              },
            },
          ],
        },
        include: {
          patient: {
            select: {
              cpf: true,
            },
          },
        },
      });
      return appointments;
    }

    if (month && year) {
      const firstDayOfTheMonth = 1;
      const beginningDate = new Date(
        parseInt(year),
        parseInt(month) - 1,
        firstDayOfTheMonth,
      );

      const lastDayOfTheMonth = 0;
      const endingDate = new Date(
        parseInt(year),
        parseInt(month),
        lastDayOfTheMonth,
      );

      const appointments = await prismaClient.appointment.findMany({
        where: {
          bookingDate: {
            gte: beginningDate,
            lte: endingDate,
          },
        },
        include: {
          patient: {
            select: {
              cpf: true,
            },
          },
        },
      });
      return appointments;
    }
  }
}
