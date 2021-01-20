/*
	As this project involved correcting scope errors in pre-written
	code, I've noted where stuff was moved or deleted, rather than
	commenting out lines - there would be a lot of them, and it
	made readability awful.
*/

// The scope of `random` is too loose 
// So we removed it here, and put it in the getRandEvent() function

// Declaring name here since it gets used a lot - global scope is good here
const name = 'Nala';

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3); // Moved this here from above
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days; // declaring days here to widen the scope
  if (event === 'Marathon') {
    days = 50; // removed the declaration of days here...
  } else if (event === 'Triathlon') {
    days = 100; // ... and here...
  } else if (event === 'Pentathlon') {
    days = 200; // ... and here as well.
  }

  return days;
};

// The scope of `name` is too tight 
// I added name as a parameter to the function
const logEvent = (name, event) => {
  // Removed the name declaration from this block
  console.log(`${name}'s event is: ${event}`);
};

// I added name as a paraemeter to the function here too
const logTime = (name, days) => {
  // Removed the name declaration from this block as well
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name, event);
logTime(name, days);

// Added these variables and function calls to test scope of random
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren'
logEvent(name2, event2);
logTime(name2, days2);
