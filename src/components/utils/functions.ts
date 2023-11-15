interface IMonths {
  [key: number]: number;
}

export default function validateDate(day: number, month: number) {
  const [shortMonth, middleMonth, longMonth] = [28, 30, 31];
  const months: IMonths = {
    1: longMonth,
    2: shortMonth,
    3: longMonth,
    4: middleMonth,
    5: longMonth,
    6: middleMonth,
    7: longMonth,
    8: longMonth,
    9: middleMonth,
    10: longMonth,
    11: middleMonth,
    12: longMonth,
  };
  if (day > months[month]) {
    return `Дней не может быть больше ${months[month]}`;
  } 
  return "";
}
