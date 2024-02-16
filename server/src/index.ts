import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import { prismaClient } from './database/prisma-client';
import { router as patientsRouter } from './routes/patients';
import { router as appointmentsRouter } from './routes/appointments';

config();

async function main() {
  try {
    const app = express();

    await prismaClient.$connect();

    const PORT = process.env.PORT || 8000;

    app.use(cors());
    app.use(express.json());

    app.use('/patients', patientsRouter);
    app.use('/appointments', appointmentsRouter);

    app.use('/', (req, res) => {
      res.send({ message: 'Welcome to the API!' });
    });

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}.`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
