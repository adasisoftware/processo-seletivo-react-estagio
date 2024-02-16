import { getAppointmentTimes } from '../utils/get-appointment-times';

export const CARDIOLOGY_APPOINTMENT_TIMES = {
  monday: getAppointmentTimes(8, 18, 30),
  wednesday: getAppointmentTimes(8, 12, 30),
  friday: getAppointmentTimes(14, 18, 30),
};
