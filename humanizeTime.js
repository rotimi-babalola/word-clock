const { toWords } = require('number-to-words');

const AM = 'am';
const PM = 'pm';
const MINUTES_IN_AN_HOUR = 60;

function humanizeTime(time) {
  const re = /(AM|PM)/gi;
  const digitRE = /\d+/g;

  const partOfDay = time.match(re)[0];
  // string that will contain the final time

  let [hours, minutes] = time.match(digitRE);

  // coerce to string
  hours = Number(hours);
  minutes = Number(minutes);

  if (minutes === 0) {
    return `${toWords(hours).toUpperCase()} O'CLOCK`;
  } else if (minutes === 15) {
    return `QUARTER PAST ${toWords(hours).toUpperCase()}`;
  } else if (minutes === 30) {
    return `HALF PAST ${toWords(hours).toUpperCase()}`;
  } else if (minutes === 45) {
    return `QUARTER TO ${toWords(hours + 1).toUpperCase()}`;
  } else if (minutes < 30) {
    return `${toWords(minutes).toUpperCase()} MINUTES PAST ${toWords(
      hours
    ).toUpperCase()}`;
  } else {
    return `${toWords(
      MINUTES_IN_AN_HOUR - minutes
    ).toUpperCase()} MINUTES TO ${toWords(hours + 1).toUpperCase()}`;
  }
}

console.log(humanizeTime('7:00PM'));
