import { getAppointmentTimes } from '../utils/get-appointment-times';

export const GENERAL_APPOINTMENT_TIMES = {
  tuesday: getAppointmentTimes(8, 18, 30),
  thursday: getAppointmentTimes(9, 13, 30),
};
