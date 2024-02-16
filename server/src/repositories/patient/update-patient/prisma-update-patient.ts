import {
  IUpdatePatientRepository,
  UpdatePatientParams,
} from '../../../controllers/patient/update-patient/protocols';
import { prismaClient } from '../../../database/prisma-client';
import { Patient } from '../../../models/patient';

export class PrismaUpdatePatientRepository implements IUpdatePatientRepository {
  async updatePatient(
    id: string,
    bodyParams: UpdatePatientParams,
  ): Promise<Patient> {
    await prismaClient.patient.update({
      where: {
        id,
      },
      data: {
        ...bodyParams,
        updatedAt: new Date(),
      },
    });

    const updatedPatient = await prismaClient.patient.findUnique({
      where: {
        id,
      },
    });

    if (!updatedPatient) {
      throw new Error('Patient was not updated.');
    }

    return updatedPatient;
  }
}
