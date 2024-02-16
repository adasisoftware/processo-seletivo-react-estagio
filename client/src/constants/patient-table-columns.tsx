import { TableColumn } from 'react-data-table-component';
import PatientsTableActionsCell from '../components/patients-table-actions-cell';
import { PatientData } from '../types/patient-data';
import { add, format } from 'date-fns';

export type PatientDataRow = PatientData;

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
    selector: (row) => format(add(row.birthday, { hours: 4 }), 'dd-MM-yyyy'),
  },
  {
    name: 'Sexo',
    cell: (row) => {
      if (row.sex === 'MALE') return 'Masculino';
      if (row.sex === 'FEMALE') return 'Feminino';
    },
  },
  {
    name: 'Ações',
    cell: (row) => <PatientsTableActionsCell rowData={row} />,
  },
];
