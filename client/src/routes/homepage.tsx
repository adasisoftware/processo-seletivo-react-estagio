import { Container } from 'react-bootstrap';

export default function Homepage() {
  return (
    <div className="h-100 d-flex flex-column">
      <header className="p-1 bg-secondary border-bottom border-4 border-black text-center">
        <h1>Homepage</h1>
      </header>
      <main className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Container className="text-center">
          <h2>Clínica</h2>
          <p>Cadastro de pacientes e agendamento de consultas</p>
        </Container>
      </main>
    </div>
  );
}
