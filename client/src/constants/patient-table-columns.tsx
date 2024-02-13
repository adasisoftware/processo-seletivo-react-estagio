import { TableColumn } from 'react-data-table-component';
import PatientsTableActionsCell from '../components/patients-table-actions-cell';
import { PatientData } from '../types/patient-data';

type PatientDataRow = PatientData;

export const PATIENTS_TABLE_COLUMNS: TableColumn<PatientDataRow>[] = [
  {
    name: 'CPF',
    selector: (row) => row.cpf,
  },
  {
    name: 'Nome completo',
    selector: (row) => row.fullName,
    sortable: true,
  },
  {
    name: 'Data de Nascimento',
    selector: (row) => row.birthday.toString(),
  },
  {
    name: 'Sexo',
    selector: (row) => row.sex,
  },
  {
    name: 'Ações',
    cell: (row) => <PatientsTableActionsCell rowData={row} />,
  },
];
