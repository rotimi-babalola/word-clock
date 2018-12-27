const { toWords } = require('number-to-words');

const AM = 'am';
const PM = 'pm';

function humanizeTime(time) {
  const re = /(AM|PM)/gi;
  const digitRE = /\d+/g;

  const partOfDay = time.match(re)[0];
  // string that will contain the final time
  let finalTime;

  let [hours, minutes] = time.match(digitRE);

  // coerce to string
  hours = Number(hours);
  minutes = Number(minutes);

  if (partOfDay.toLowerCase() === AM) {
    if (minutes < 30) {
      finalTime = `${toWords(minutes).toUpperCase()} MINUTES PAST ${toWords(
        hours
      ).toUpperCase()}`;
      return finalTime;
    }
  } else if (partOfDay.toLowerCase() === PM) {
    //
  } else {
    return 'Invalid time!!!';
  }
}

// const str = "11:08am";
// str.match(digitRE);

console.log(humanizeTime('11:08am'));
