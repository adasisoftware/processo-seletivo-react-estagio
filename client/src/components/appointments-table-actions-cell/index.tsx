import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AppointmentData } from '../../types/appointment-data';
import EditAppointmentForm from './edit-appointment-form';

type AppointmentsTableActionsCellProps = {
  rowData: AppointmentData;
};

export default function AppointmentsTableActionsCell({
  rowData,
}: AppointmentsTableActionsCellProps) {
  const [showModal, setShowModal] = useState(false);

  function handleEditBtnClick() {
    handleOpenModal();
  }

  function handleDeleteBtnClick() {}

  function handleOpenModal() {
    return setShowModal(true);
  }

  function handleCloseModal() {
    return setShowModal(false);
  }

  return (
    <>
      <div>
        <Button
          variant="warning"
          size="sm"
          className="me-3"
          onClick={handleEditBtnClick}
        >
          <i className="bi bi-pen"></i>
        </Button>
        <Button variant="danger" size="sm" onClick={handleDeleteBtnClick}>
          <i className="bi bi-trash bg-dang"></i>
        </Button>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar agendamento da consulta</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EditAppointmentForm selectedAppointment={rowData} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
