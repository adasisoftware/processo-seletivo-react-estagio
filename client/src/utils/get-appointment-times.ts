import { add, format } from 'date-fns';

export function getAppointmentTimes(
  beginningTimeHour: number,
  endingTimeHour: number,
  intervalInMinutes: number,
) {
  const dummyDate = new Date(2000, 0, 1);

  const beginning = add(dummyDate, { hours: beginningTimeHour });
  const ending = add(dummyDate, { hours: endingTimeHour });
  const interval = intervalInMinutes;

  const times = [];

  for (
    let time = beginning;
    time <= ending;
    time = add(time, { minutes: interval })
  ) {
    const formattedTime = format(time, 'kk:mm');
    times.push(formattedTime);
  }

  return times;
}
