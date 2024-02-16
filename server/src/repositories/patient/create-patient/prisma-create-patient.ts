import {
  CreatePatientParams,
  ICreatePatientRepository,
} from '../../../controllers/patient/create-patient/protocols';
import { prismaClient } from '../../../database/prisma-client';
import { Patient } from '../../../models/patient';

export class PrismaCreatePatientRepository implements ICreatePatientRepository {
  async createPatient(bodyParams: CreatePatientParams): Promise<Patient> {
    const { id } = await prismaClient.patient.create({
      data: {
        ...bodyParams,
      },
    });

    const createdPatient = await prismaClient.patient.findUnique({
      where: {
        id,
      },
    });

    if (!createdPatient) {
      throw new Error('Patient was not created.');
    }

    return createdPatient;
  }
}
