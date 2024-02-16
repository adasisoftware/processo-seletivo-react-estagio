import { TableColumn } from 'react-data-table-component';
import { AppointmentData } from '../types/appointment-data';
import AppointmentsTableActionsCell from '../components/appointments-table-actions-cell';
import { add, format } from 'date-fns';

export type AppointmentDataRow = AppointmentData & {
  patient: {
    cpf: string;
  };
};

export const APPOINTMENTS_TABLE_COLUMNS: TableColumn<AppointmentDataRow>[] = [
  {
    name: 'Data',
    selector: (row) => format(add(row.bookingDate, { hours: 4 }), 'dd-MM-yyyy'),
  },
  {
    name: 'Horário',
    selector: (row) => row.bookingTime,
  },
  {
    name: 'Tipo da consulta',
    cell: (row) => {
      if (row.type === 'cardiology') return 'Cardiologia';
      if (row.type === 'general') return 'Clinica Médica';
    },
  },
  {
    name: 'CPF do paciente',
    selector: (row) => row.patient.cpf,
  },
  {
    name: 'Ações',
    cell: (row) => <AppointmentsTableActionsCell rowData={row} />,
  },
];
