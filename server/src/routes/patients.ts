import { Router } from 'express';
import { CreatePatientController } from '../controllers/patient/create-patient';
import { GetPatientsController } from '../controllers/patient/get-patients';
import { PrismaCreatePatientRepository } from '../repositories/patient/create-patient/prisma-create-patient';
import { PrismaGetPatientsRepository } from '../repositories/patient/get-patients/prisma-get-patients';
import { UpdatePatientController } from '../controllers/patient/update-patient';
import { PrismaUpdatePatientRepository } from '../repositories/patient/update-patient/prisma-update-patient';
import { PrismaDeletePatientRepository } from '../repositories/patient/delete-patient/prisma-delete-patient';
import { DeletePatientController } from '../controllers/patient/delete-patient';

const router = Router();

router.get('/', async (req, res) => {
  const prismaGetPatientsRepository = new PrismaGetPatientsRepository();

  const getPatientsController = new GetPatientsController(
    prismaGetPatientsRepository,
  );

  const { body, statusCode } = await getPatientsController.handle({
    query: req.query,
  });

  res.send(body).status(statusCode);
});

router.post('/', async (req, res) => {
  const prismaCreatePatientRepository = new PrismaCreatePatientRepository();

  const createPatientController = new CreatePatientController(
    prismaCreatePatientRepository,
  );

  const { body, statusCode } = await createPatientController.handle({
    body: req.body,
  });

  res.send(body).status(statusCode);
});

router.put('/:id', async (req, res) => {
  const prismaUpdatePatientRepository = new PrismaUpdatePatientRepository();

  const updatePatientController = new UpdatePatientController(
    prismaUpdatePatientRepository,
  );

  const { body, statusCode } = await updatePatientController.handle({
    body: req.body,
    params: req.params,
  });

  res.send(body).status(statusCode);
});

router.delete('/:id', async (req, res) => {
  const prismaDeletePatientRepository = new PrismaDeletePatientRepository();

  const deletePatientController = new DeletePatientController(
    prismaDeletePatientRepository,
  );

  const { body, statusCode } = await deletePatientController.handle({
    body: req.body,
    params: req.params,
  });

  res.send(body).status(statusCode);
});

export { router };
