import { Container } from 'react-bootstrap';
import BookNewAppointment from '../components/book-new-appointment';
import { APPOINTMENTS_TABLE_COLUMNS } from '../constants/appointment-table-columns';

export default function AppointmentsPage() {
  return (
    <div className="h-100 d-flex flex-column">
      <header className="p-1 bg-secondary border-bottom border-4 border-black text-center">
        <h1>Consultas</h1>
      </header>
      <main className="p-4 flex-grow-1 d-flex justify-content-center align-items-start">
        <Container className="d-flex flex-column gap-4">
          <Container>
            <BookNewAppointment />
          </Container>
          <Container>
            <DataTableBase
              columns={APPOINTMENTS_TABLE_COLUMNS}
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
