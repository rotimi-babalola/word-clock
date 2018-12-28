const { toWords } = require('number-to-words');
const { MINUTES_IN_AN_HOUR } = require('./constants');

const humanizeTime = (time) => {
  // const re = /(AM|PM)/gi;
  const digitRE = /\d+/g;

  // const partOfDay = time.match(re)[0];

  let [hours, minutes] = time.match(digitRE);

  // coerce to string
  hours = Number(hours);
  minutes = Number(minutes);

  if (minutes === 0) {
    return `${toWords(hours).toUpperCase()} O'CLOCK`;
  }
  if (minutes === 15) {
    return `QUARTER PAST ${toWords(hours).toUpperCase()}`;
  }
  if (minutes === 30) {
    return `HALF PAST ${toWords(hours).toUpperCase()}`;
  }
  if (minutes === 45) {
    return `QUARTER TO ${toWords(hours + 1).toUpperCase()}`;
  }
  if (minutes < 30) {
    return `${toWords(minutes).toUpperCase()} MINUTES PAST ${toWords(
      hours,
    ).toUpperCase()}`;
  }
  return `${toWords(
    MINUTES_IN_AN_HOUR - minutes,
  ).toUpperCase()} MINUTES TO ${toWords(hours + 1).toUpperCase()}`;
};

export default humanizeTime;
