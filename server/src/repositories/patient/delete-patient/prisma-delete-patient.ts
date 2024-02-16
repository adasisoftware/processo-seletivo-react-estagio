import { IDeletePatientRepository } from '../../../controllers/patient/delete-patient/protocols';
import { prismaClient } from '../../../database/prisma-client';
import { Patient } from '../../../models/patient';

export class PrismaDeletePatientRepository implements IDeletePatientRepository {
  async deletePatient(id: string): Promise<Patient> {
    const deletedPatient = await prismaClient.patient.findUnique({
      where: {
        id,
      },
    });

    if (!deletedPatient) {
      throw new Error('Patient was not found.');
    }

    await prismaClient.patient.delete({
      where: {
        id,
      },
    });

    return deletedPatient;
  }
}
