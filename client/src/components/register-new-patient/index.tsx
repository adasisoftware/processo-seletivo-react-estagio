import { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import NewPatientForm from './new-patient-form';

export default function RegisterNewPatient() {
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
        Cadastrar paciente
        <i className="bi bi-plus fs-5"></i>
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar novo paciente</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <NewPatientForm />
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