export function dateTimeToPlayTime(progress) {
  const dateTime = new Date(0);
  dateTime.setSeconds(progress);
  const minutes = dateTime
    .getMinutes()
    .toString()
    .padStart(2, '0');
  const seconds = dateTime
    .getSeconds()
    .toString()
    .padStart(2, '0');
  const currentTime = `${minutes}:${seconds}`;
  return currentTime;
}
