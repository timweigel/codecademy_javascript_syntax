let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
let runnerAge = 'cheese';

if (runnerAge > 18 && registerEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registerEarly) {
  console.log(`Runner number ${raceNumber}: you will run at 9:30 am.`);
} else if (runnerAge > 18 && !registerEarly) {
  console.log(`Runner number ${raceNumber}: late adults run at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Runner number ${raceNumber}: youth will race at 12:30 pm.`);
} else {
  console.log(`Runner number ${raceNumber}: please see the registration desk.`);
}
