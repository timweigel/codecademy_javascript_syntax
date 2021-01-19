// Get sleep hours for a given day
const getSleepHours = day => {
	/* 
	  This toLowerCase() isn't required in the exercise, but easier to account 
	  for different capitalization preferences.
	*/
	switch(day.toLowerCase()) {
	  case 'monday':
		return 7;
		break;
	  case 'tuesday':
		return 6;
		break;
	  case 'wednesday':
		return 8;
		break;
	  case 'thursday':
		return 9;
		break;
	  case 'friday':
		return 5;
		break;
	  case 'saturday':
		return 9;
		break;
	  case 'sunday':
		return 10;
		break;
	  default:
		console.log('That\'s not an actual day.');
	}
  }
  
  /* 
	This part of the exercise calls for an implicit return, so I'm using the
	concise notation
  */
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
    
  /*
	You can also rewrite getActualSleepHours() to not call getSleepHours() for
	each day, but rather use literal numbers:
	const getActualSleepHours = () => 7 + 6 + 8 + 9 + 5 + 9 + 10;
  */
  
  
  /*
  // The original getIdealSleepHours() function:
  const getIdealSleepHours = () => {
	const idealHours = 8;
	return idealHours * 7;
  }
  */
  
  // Rewriting getIdealSleepHours to accept a parameter.
  const getIdealSleepHours = (idealHours) => {
	return idealHours * 7;
  }
  
  /*
	Rewriting the declaration of calculateSleepDebt to accept a parameter for
	the ideal hours of sleep. This isn't in the exercise, but I did it for extra
	practice:
  */
  //const calculateSleepDebt = () => {
  const calculateSleepDebt = idealHours => {
	let actualSleepHours = getActualSleepHours();
	// A few different ways to call getIdealSleepHours:
	// If we're using a hard-coded value in getIdealSleepHours:
	//let idealSleepHours = getIdealSleepHours();
	// If we're passing a parameter in directly:
	//let idealSleepHours = getIdealSleepHours(8);
	// If we're passing the parameter in calculateSleepDebit itself:
	let idealSleepHours = getIdealSleepHours(idealHours);
  
	/*
	  The way the exercise is written it seems like they want separate if/else
	  statements for each condition, but this works too
	*/
	if (actualSleepHours === idealSleepHours) {
	  console.log('You got the perfect amount of sleep, ' + idealSleepHours + ' hours!');
	} else if (actualSleepHours > idealSleepHours) {
	  console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed.');
	} else {
	  console.log('You should get some rest, you got ' + (idealSleepHours - actualSleepHours) + ' hours too little sleep.');
	}
  }
  
  // The original call to calculateSleepDebt():
  //calculateSleepDebt();
  
  // Calling calculateSleepDebt() after we included the parameter:
  calculateSleepDebt(8);