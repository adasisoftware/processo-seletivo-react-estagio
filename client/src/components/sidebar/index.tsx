import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

export default function Sidebar() {
  return (
    <aside className="p-4 bg-secondary border-end border-4 border-black">
      <Navbar className="navbar-dark">
        <Container className="d-flex gap-3 flex-column justify-content-start align-items-start">
          <Navbar.Brand>
            <Link
              to="/"
              className="hoverable px-3 py-1 d-flex gap-3 fs-3 text-decoration-none text-black bg-white rounded"
            >
              <i className="bi bi-hospital"></i>
              Clínica
            </Link>
          </Navbar.Brand>
          <Navbar.Text>
            <Link
              to="/"
              className="hoverable fs-5 d-flex align-items-center gap-2"
            >
              <i className="bi bi-house fs-2"></i>
              Homepage
            </Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link
              to="/pacientes"
              className="hoverable fs-5 d-flex align-items-center gap-2"
            >
              <i className="bi bi-file-earmark-person fs-2"></i>
              Pacientes
            </Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link
              to="/consultas"
              className="hoverable fs-5 d-flex align-items-center gap-2"
            >
              <i className="bi bi-calendar-date fs-2"></i>
              Consultas
            </Link>
          </Navbar.Text>
        </Container>
      </Navbar>
    </aside>
  );
}
