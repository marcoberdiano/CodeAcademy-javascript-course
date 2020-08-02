let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 18;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
} 

if (runnerAge > 18 && registeredEarly) {
  console.log(`${raceNumber}, Early adults run at 9:30 am`)
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`${raceNumber}, Late adults run at 11:00 am`)
} else if (runnerAge < 18) {
  console.log(`${raceNumber}, Youth registrants run at 12:30 pm`)
} else {
  console.log(' Please, see the registration desk')
}