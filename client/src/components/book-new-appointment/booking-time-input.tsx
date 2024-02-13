import GenericInputGroup from '../generic-input-group';
import { AppointmentFormValues } from '../../types/appointment-form-values';
import { useFormikContext } from 'formik';
import { CARDIOLOGY_APPOINTMENT_TIMES } from '../../constants/cardiology-appointment-times';
import { GENERAL_APPOINTMENT_TIMES } from '../../constants/general-appointment-times';

export default function BookingTimeInput() {
  const { values } = useFormikContext<AppointmentFormValues>();

  let displayedTimes;

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
    displayedTimes = null;
  }

  const selectedType = values.type;

  if (selectedType === 'cardiology') {
    if (selectedDayOfTheWeek === 'monday') {
      displayedTimes = CARDIOLOGY_APPOINTMENT_TIMES.monday;
    } else if (selectedDayOfTheWeek === 'wednesday') {
      displayedTimes = CARDIOLOGY_APPOINTMENT_TIMES.wednesday;
    } else if (selectedDayOfTheWeek === 'friday') {
      displayedTimes = CARDIOLOGY_APPOINTMENT_TIMES.friday;
    }
  } else if (selectedType === 'general') {
    if (selectedDayOfTheWeek === 'tuesday') {
      displayedTimes = GENERAL_APPOINTMENT_TIMES.tuesday;
    } else if (selectedDayOfTheWeek === 'thursday') {
      displayedTimes = GENERAL_APPOINTMENT_TIMES.thursday;
    }
  }

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
        <option key={0} defaultValue="Selecione um horário">
          Selecione um horário
        </option>
        {displayedTimes ? (
          displayedTimes.map((time, index) => {
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
