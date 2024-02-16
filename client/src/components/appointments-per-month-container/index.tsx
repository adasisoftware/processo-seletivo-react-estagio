import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { BASE_URL } from '../../api';
import {
  AppointmentDataRow,
  APPOINTMENTS_TABLE_COLUMNS,
} from '../../constants/appointment-table-columns';
import DataTableBase from '../data-table-base';

type selectedMonthAndYearT = {
  month: number;
  year: number;
};

export default function AppointmentsPerMonthContainer() {
  const [selectedMonthAndYear, setSelectedMonthAndYear] =
    useState<selectedMonthAndYearT>({
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    });
  const [appointmentsData, setAppointmentsData] = useState<
    AppointmentDataRow[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAppointmentsData();

    async function fetchAppointmentsData() {
      const { month, year } = selectedMonthAndYear;

      const response = await fetch(
        `${BASE_URL}/appointments?month=${month}&year=${year}`,
        {
          method: 'GET',
          headers: { 'Content-type': 'application/json' },
        },
      );

      const appointmentsData = await response.json();

      setAppointmentsData(appointmentsData);
      setIsLoading(false);
    }
  }, [selectedMonthAndYear]);

  function handleSubtractMonthClick() {
    const updatedMonthAndYear = { ...selectedMonthAndYear };

    if (selectedMonthAndYear.month === 1) {
      updatedMonthAndYear.month = 12;
      updatedMonthAndYear.year--;
      setSelectedMonthAndYear(updatedMonthAndYear);
      return;
    }
    updatedMonthAndYear.month--;

    setSelectedMonthAndYear(updatedMonthAndYear);
  }

  function handleAddMonthClick() {
    const updatedMonthAndYear = { ...selectedMonthAndYear };
    if (selectedMonthAndYear.month === 12) {
      updatedMonthAndYear.month = 1;
      updatedMonthAndYear.year++;
      setSelectedMonthAndYear(updatedMonthAndYear);
      return;
    }
    updatedMonthAndYear.month++;
    setSelectedMonthAndYear(updatedMonthAndYear);
  }

  return (
    <Container className="d-flex flex-column gap-4">
      <Container className="d-flex gap-4 justify-content-center">
        <Button onClick={handleSubtractMonthClick}>
          <i className="bi bi-chevron-compact-left"></i>
        </Button>
        <h3>
          mês:{' '}
          {selectedMonthAndYear.month.toString().length < 2
            ? `0${selectedMonthAndYear.month}`
            : selectedMonthAndYear.month}{' '}
          - ano: {selectedMonthAndYear.year}
        </h3>
        <Button onClick={handleAddMonthClick}>
          <i className="bi bi-chevron-right"></i>
        </Button>
      </Container>
      {isLoading ? (
        <Container className="d-flex justify-content-center">
          <h2>Carregando dados...</h2>
        </Container>
      ) : appointmentsData.length > 0 ? (
        <DataTableBase
          columns={APPOINTMENTS_TABLE_COLUMNS}
          data={appointmentsData}
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
  );
}
