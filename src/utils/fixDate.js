const addZero = (number) => {
  return number > 9 ? number : `0${number}`;
};

const days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

const getDayOfWeek = (n) => {
  if (n === -1) n = 6;
  return days[n];
};

export const fixDate = (date) => {
  let day = new Date(date);
  return `${getDayOfWeek(day.getDay() - 1)} ${day.getDate()}.${addZero(
    day.getMonth() + 1
  )}.${day.getFullYear()} ${day.getHours()}:${addZero(day.getMinutes())}`;
};
