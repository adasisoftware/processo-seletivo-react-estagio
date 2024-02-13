import { TableColumn } from 'react-data-table-component';
import { AppointmentData } from '../types/appointment-data';
import AppointmentsTableActionsCell from '../components/appointments-table-actions-cell';

type AppointmentDataRow = AppointmentData;

export const APPOINTMENTS_TABLE_COLUMNS: TableColumn<AppointmentDataRow>[] = [
  {
    name: 'Data',
    selector: (row) => row.bookingDate,
  },
  {
    name: 'Horário',
    selector: (row) => row.bookingTime,
  },
  {
    name: 'Tipo da consulta',
    selector: (row) => row.type,
  },
  {
    name: 'CPF do paciente',
    selector: (row) => row.patientCPF,
  },
  {
    name: 'Nome do paciente',
    selector: (row) => row.patientFullName,
  },
  {
    name: 'Ações',
    cell: (row) => <AppointmentsTableActionsCell rowData={row} />,
  },
];
