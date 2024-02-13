import { Container } from 'react-bootstrap';
import RegisterNewPatient from '../components/register-new-patient';
import DataTableBase from '../components/data-table-base';
import { PATIENTS_TABLE_COLUMNS } from '../constants/patient-table-columns';

export default function PatientsPage() {
  return (
    <div className="h-100 d-flex flex-column">
      <header className="p-1 bg-secondary border-bottom border-4 border-black text-center">
        <h1>Pacientes</h1>
      </header>
      <main className="p-4 flex-grow-1 d-flex justify-content-center align-items-start">
        <Container className="d-flex flex-column gap-4">
          <Container>
            <RegisterNewPatient />
          </Container>
          <Container>
            <DataTableBase
              columns={PATIENTS_TABLE_COLUMNS}
              data={}
              highlightOnHover
              striped
              fixedHeader
            />
          </Container>
        </Container>
      </main>
    </div>
  );
}
