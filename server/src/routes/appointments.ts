import { Router } from 'express';
import { GetAppointmentsController } from '../controllers/appointment/get-appointments';
import { PrismaGetAppointmentsRepository } from '../repositories/appointment/get-appointments/prisma-get-appointments';
import { CreateAppointmentController } from '../controllers/appointment/create-appointment';
import { DeleteAppointmentController } from '../controllers/appointment/delete-appointment';
import { UpdateAppointmentController } from '../controllers/appointment/update-appointment';
import { PrismaCreateAppointmentRepository } from '../repositories/appointment/create-appointment/prisma-create-appointment';
import { PrismaDeleteAppointmentRepository } from '../repositories/appointment/delete-appointment/prisma-delete-appointment';
import { PrismaUpdateAppointmentRepository } from '../repositories/appointment/update-appointment/prisma-update-appointment';

const router = Router();

router.get('/', async (req, res) => {
  const prismaGetAppointmentsRepository = new PrismaGetAppointmentsRepository();

  const getAppointmentsController = new GetAppointmentsController(
    prismaGetAppointmentsRepository,
  );

  const { body, statusCode } = await getAppointmentsController.handle({
    query: req.query,
  });

  res.send(body).status(statusCode);
});

router.post('/', async (req, res) => {
  const prismaCreateAppointmentRepository =
    new PrismaCreateAppointmentRepository();

  const createAppointmentController = new CreateAppointmentController(
    prismaCreateAppointmentRepository,
  );

  const { body, statusCode } = await createAppointmentController.handle({
    body: req.body,
  });

  res.send(body).status(statusCode);
});

router.put('/:id', async (req, res) => {
  const prismaUpdateAppointmentRepository =
    new PrismaUpdateAppointmentRepository();

  const updateAppointmentController = new UpdateAppointmentController(
    prismaUpdateAppointmentRepository,
  );

  const { body, statusCode } = await updateAppointmentController.handle({
    body: req.body,
    params: req.params,
  });

  res.send(body).status(statusCode);
});

router.delete('/:id', async (req, res) => {
  const prismaDeleteAppointmentRepository =
    new PrismaDeleteAppointmentRepository();

  const deleteAppointmentController = new DeleteAppointmentController(
    prismaDeleteAppointmentRepository,
  );

  const { body, statusCode } = await deleteAppointmentController.handle({
    body: req.body,
    params: req.params,
  });

  res.send(body).status(statusCode);
});

export { router };
