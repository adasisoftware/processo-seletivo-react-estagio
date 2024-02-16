import GenericInputGroup from '../generic-input-group';
import { AppointmentFormValues } from '../../types/appointment-form-values';
import { useFormikContext } from 'formik';
import { CARDIOLOGY_APPOINTMENT_TIMES } from '../../constants/cardiology-appointment-times';
import { GENERAL_APPOINTMENT_TIMES } from '../../constants/general-appointment-times';
import { useEffect, useState } from 'react';
import { AppointmentDataRow } from '../../constants/appointment-table-columns';
import { BASE_URL } from '../../api';

export default function BookingTimeInput() {
  const { values } = useFormikContext<AppointmentFormValues>();
  const [displayableTimes, setDisplayableTimes] = useState<string[]>([]);

  let baseDisplayableTimes: string[] = [];

  useEffect(() => {
    const selectedDate = new Date(values.bookingDate);

    const daysOfTheWeek = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ];

    const selectedDayOfTheWeek = daysOfTheWeek[selectedDate.getUTCDay()];

    if (
      selectedDayOfTheWeek === 'sunday' ||
      selectedDayOfTheWeek === 'saturday'
    ) {
      baseDisplayableTimes = [];
    }

    const selectedType = values.type;

    if (selectedType === 'cardiology') {
      if (selectedDayOfTheWeek === 'monday') {
        baseDisplayableTimes = CARDIOLOGY_APPOINTMENT_TIMES.monday;
      } else if (selectedDayOfTheWeek === 'wednesday') {
        baseDisplayableTimes = CARDIOLOGY_APPOINTMENT_TIMES.wednesday;
      } else if (selectedDayOfTheWeek === 'friday') {
        baseDisplayableTimes = CARDIOLOGY_APPOINTMENT_TIMES.friday;
      }
    } else if (selectedType === 'general') {
      if (selectedDayOfTheWeek === 'tuesday') {
        baseDisplayableTimes = GENERAL_APPOINTMENT_TIMES.tuesday;
      } else if (selectedDayOfTheWeek === 'thursday') {
        baseDisplayableTimes = GENERAL_APPOINTMENT_TIMES.thursday;
      }
    }

    fetchAppointmentsDataAndCompare();

    async function fetchAppointmentsDataAndCompare() {
      const response = await fetch(
        `${BASE_URL}/appointments?type=${values.type}&bookingDate=${values.bookingDate}`,
        {
          method: 'GET',
          headers: { 'Content-type': 'application/json' },
        },
      );

      const appointmentsOnTheSameDateAndOfSameTypeData =
        (await response.json()) as AppointmentDataRow[];

      const forbiddenTimes = appointmentsOnTheSameDateAndOfSameTypeData.map(
        (appointment) => {
          return appointment.bookingTime;
        },
      );

      const allowedTimes = baseDisplayableTimes.filter((displayedTime) => {
        if (!forbiddenTimes.includes(displayedTime)) return true;
        return false;
      });

      setDisplayableTimes(allowedTimes);
    }
  }, [values.bookingDate, values.type]);

  return (
    <>
      <GenericInputGroup
        select
        name="bookingTime"
        id="bookingTime"
        labelText="Horário"
        className="form-select"
        required
      >
        {displayableTimes.length > 0 ? (
          displayableTimes.map((time, index) => {
            return (
              <option key={index + 1} value={time}>
                {time}
              </option>
            );
          })
        ) : (
          <></>
        )}
      </GenericInputGroup>
    </>
  );
}
