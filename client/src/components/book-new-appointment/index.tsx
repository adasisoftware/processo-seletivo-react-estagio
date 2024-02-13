import { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import BookAppointmentForm from './book-appointment-form';

export default function BookNewAppointment() {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    return setShowModal(true);
  }

  function handleCloseModal() {
    return setShowModal(false);
  }

  return (
    <Container>
      <Button
        className="fs-5 d-flex align-items-center gap-2"
        onClick={handleOpenModal}
      >
        Marcar consulta
        <i className="bi bi-plus fs-5"></i>
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Marcar nova consulta</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <BookAppointmentForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
