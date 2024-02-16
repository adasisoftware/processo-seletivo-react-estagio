import { Container } from 'react-bootstrap';
import RegisterNewPatient from '../components/register-new-patient';
import DataTableBase from '../components/data-table-base';
import {
  PATIENTS_TABLE_COLUMNS,
  PatientDataRow,
} from '../constants/patient-table-columns';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../api';

export default function PatientsPage() {
  const [patientsData, setPatientsData] = useState<PatientDataRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPatientsData();

    async function fetchPatientsData() {
      const response = await fetch(`${BASE_URL}/patients`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      });

      const patientsData = await response.json();

      setPatientsData(patientsData);
      setIsLoading(false);
    }
  }, [patientsData]);
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
            {isLoading ? (
              <Container className="d-flex justify-content-center">
                <h2>Carregando dados...</h2>
              </Container>
            ) : patientsData.length > 0 ? (
              <DataTableBase
                columns={PATIENTS_TABLE_COLUMNS}
                data={patientsData}
                highlightOnHover
                striped
                fixedHeader
              />
            ) : (
              <Container className="d-flex justify-content-center">
                <h2>Sem dados.</h2>
              </Container>
            )}
          </Container>
        </Container>
      </main>
    </div>
  );
}
