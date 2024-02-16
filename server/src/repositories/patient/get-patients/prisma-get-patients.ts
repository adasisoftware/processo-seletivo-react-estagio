import { IGetPatientsRepository } from '../../../controllers/patient/get-patients/protocols';
import { prismaClient } from '../../../database/prisma-client';
import { Patient } from '../../../models/patient';

export class PrismaGetPatientsRepository implements IGetPatientsRepository {
  async getPatients(queryParams?: any): Promise<Patient[]> {
    if (!queryParams) {
      const patients = await prismaClient.patient.findMany();
      return patients;
    }

    const { cpf, fullName, birthday, sex } = queryParams;

    const patients = await prismaClient.patient.findMany({
      where: {
        OR: [
          {
            cpf,
          },
          {
            fullName,
          },
          {
            birthday,
          },
          {
            sex,
          },
        ],
      },
    });

    return patients;
  }
}
