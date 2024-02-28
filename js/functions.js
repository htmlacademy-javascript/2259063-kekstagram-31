
// Делу время
const checkMeet = (workDayStart, workDayEnd, meetStart, meetDuration) => {
  let [startHours, startMinutes] = workDayStart.split(':');
  let [endHours, endMinutes] = workDayEnd.split(':');
  let [MeetStartHours, MeetStartMinutes] = meetStart.split(':');

  const convertToMinutes = (hours, minutes) => hours * 60 + minutes;
  const tranformToNumber = (time) => parseInt(time, 10);

  startHours = tranformToNumber(startHours);
  startMinutes = tranformToNumber(startMinutes);
  endHours = tranformToNumber(endHours);
  endMinutes = tranformToNumber(endMinutes);
  MeetStartHours = tranformToNumber(MeetStartHours);
  MeetStartMinutes = tranformToNumber(MeetStartMinutes);

  const MinutesWorkDayStart = convertToMinutes(startHours, startMinutes);
  const MinutesWorkDayEnd = convertToMinutes(endHours, endMinutes);
  const MinutesMeetStart = convertToMinutes(MeetStartHours, MeetStartMinutes);

  const endMeetingTime = MinutesMeetStart + meetDuration;

  return (
    MinutesMeetStart >= MinutesWorkDayStart &&
    MinutesMeetStart <= MinutesWorkDayEnd &&
    endMeetingTime <= MinutesWorkDayEnd);
};

// console.log(checkMeet('08:00', '17:30', '14:00', 90)); // true
// console.log(checkMeet('8:0', '10:0', '8:0', 120)); // true
// console.log(checkMeet('08:00', '14:30', '14:00', 90)); // false
// console.log(checkMeet('14:00', '17:30', '08:0', 90)); // false
// console.log(checkMeet('8:00', '17:30', '08:00', 900)); // false
