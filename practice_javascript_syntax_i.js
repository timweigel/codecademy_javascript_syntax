/*
	This file contains my solutions to the various exercises in the module
	Practice JavaScript Syntax: Variables, Data Types, Conditionals, Functions
	Rather than upload a bunch of separate scripts, my solutions are all 
	in this file in order.
*/

/* Code Challenges: JavaScript Fundamentals */

/* 1. Introduction/greetWorld() */
// Write your function here:
function greetWorld() {
  return 'Hello, World!';
}

//Write code to test your function. Even if we provide code to test your function, you should add further tests to make sure your function works correctly in all the specified situations

/* 2. canIVote() */
// Write your function here:
function canIVote(myAge) {
	if (myAge >= 18) {
	  return true;
	} else {
	  return false;
	}
  }
  
  // Uncomment the line below when you're ready to try out your function
   console.log(canIVote(19)) // Should print true
 // I gave it some extra tests here. 
  console.log(canIVote(18))
  console.log(canIVote(14))
  // We encourage you to add more function calls of your own to test your code!

/* 3. agreeOrDisagree() */
// Write your function here:
function agreeOrDisagree(stringOne, stringTwo) {
	if (stringOne === stringTwo) {
	  return 'You agree!';
	} else {
	  return 'You disagree!';
	}
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(agreeOrDisagree("yep", "yep")) 
  // Should print 'You agree!'
  
  // We encourage you to add more function call of your own to test your code!

/* 4. lifePhase() */
// Write your function here:
function lifePhase(age) {
	if (age >=0 && age <= 3) {
	  return 'baby';
	} else if (age >= 4 && age <= 12) {
	  return 'child';
	} else if (age >= 13 && age <= 19) {
	  return 'teen';
	} else if (age >= 20 && age <= 64) {
	  return 'adult';
	} else if (age >= 65 && age <= 140) {
	  return 'senior citizen';
	} else {
	  return 'This is not a valid age';
	}
  }
  // Trying to rewrite it to be a little simpler, not testing for values
  // between.
  function lifePhase2(age2) {
	if (age2 < 0) {
	  return 'This is not a valid age';
	} else if (age2 < 4) {
	  return 'baby';
	} else if (age2 < 13) {
	  return 'child';
	} else if (age2 < 20) {
	  return 'teen';
	} else if (age2 < 65) {
	  return 'adult';
	} else if (age2 < 141) {
	  return 'senior citizen';
	} else {
	  return 'This is not a valid age';
	}
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(lifePhase2(70)) //should print 'child'
// The above is not the original test case. I just modified it rather than write additional ones.
  // We encourage you to add more function calls of your own to test your code!

/* 5. finalGrade() */
// Write your function here:
function finalGrade(scoreOne, scoreTwo, scoreThree) {
	let avgScore;
	if ((scoreOne < 0 || scoreOne > 100) || (scoreTwo < 0 || scoreTwo > 100) || (scoreThree < 0 || scoreThree > 100)) {
	  return 'You have entered an invalid grade.';
	}
	  avgScore = (scoreOne + scoreTwo + scoreThree)/3;
	  //return avgScore;
	  /*
	  if (avgScore < 60) {
		return 'F';
	  } else if (avgScore < 70) {
		return 'D';
	  } else if (avgScore < 80) {
		return 'C';
	  } else if (avgScore < 90) {
		return 'B';
	  } else if (avgScore <= 100) {
		return 'A';
	  }
	  //*/
  
	  ///* // This was me banging my shins on using switch with 
		   // cases that evaluate booleans. Not really worth it - 
		   // better to use if/else, I think
	  switch (true) {
		case (avgScore < 60):
		  return 'F'; // Because I'm returning a value the break statements
		  break;      // are unnecessary and won't ever be reached
		case (avgScore < 70):
		  return 'D';
		  break;
		case (avgScore < 80):
		  return 'C';
		  break;
		case (avgScore < 90):
		  return 'B';
		  break;
		case (avgScore <= 100):
		  return 'A';
		  break;
	  }
	  //*/
	  
  }

  // Uncomment the line below when you're ready to try out your function
   console.log(finalGrade(100, 100, 100)) // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!

/* 6. reportingForDuty() */
// Write your function here:
function reportingForDuty(rank, lastName) {
	return `${rank} ${lastName} reporting for duty!`;
  }
  
  
  // Uncomment the line below when you're ready to try out your function
   console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'
  
  // We encourage you to add more function calls of your own to test your code!

/* 7. Fix the Broken Code/rollTheDice() */
const rollTheDice = () => {
	// Math.random() gives us a random number from 0 up to, but not including, 1
	// We multiplied that by 6 to get a number between 0 and up to, but not including, 6
	// But since we actually wanted numbers from 1 to 6, inclusive, we added 1
	  let die1 = Math.floor(Math.random() * 6 + 1)
	  let die2 = Math.floor(Math.random() * 6 + 1)
	  return die1 + die2
  }
  
  rollTheDice();

/* 8. calcuateWeight() */
// Write your function here:
function calculateWeight(earthWeight, planet) {
	switch(planet){
	  case 'Mercury':
		return earthWeight * 0.378;
		break;
	  case 'Venus':
		return earthWeight * 0.907;
		break;
	  case 'Mars':
		return earthWeight * 0.377;
		break;
	  case 'Jupiter':
		return earthWeight * 2.36;
		break;
	  case 'Saturn':
		return earthWeight * 0.916;
		break;
	  default:
		return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
	}
  }
  
  // Uncomment the line below when you're ready to try out your function
   console.log(calculateWeight(100, 'Jupiter')) // Should print 236
  
  // We encourage you to add more function calls of your own to test your code!

/* 9. truthyOrFalsy() */
/*
  This one gave me a little trouble - I'm used to evaluating expressions
  in if statements, but any truthy value will evaluate to true. I suspect
  this will come in handy at some point, but it was hard for me to grasp
  at first!
*/
// Write your function here:
function truthyOrFalsy(value) {
	if (value) {
	  return true;
	} else {
	  return false;
	}
  }
  // Uncomment the line below when you're ready to try out your function
  console.log(truthyOrFalsy(0)) // Should print false
  console.log(truthyOrFalsy('cheese'))
  // We encourage you to add more function calls of your own to test your code!

/* 10. numImaginaryFriends */
// Write your function here:
function numImaginaryFriends(friends) {
	return Math.round(friends * .33); // They really do mean * .33 - 
									  // won't work with / 3 to get the same
									  // effective result. LFMF.
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(numImaginaryFriends(17)) // Should print 6
  
  // We encourage you to add more function calls of your own to test your code!
  
  console.log(Math.round(16/3));

/* 11. sillySentence() */
// Write your function here:
function sillySentence(adjective, verb, noun) {
	return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(sillySentence('excited', 'love', 'functions')) 
  
  // We encourage you to add more function calls of your own to test your code!

/* 12. howOld() */
/*
  They're not kidding when they say your returns must be EXACT. I struggled
  with this for a while before realizing I had a typo in the string.
*/
// Write your function here:
function howOld(age, year) {
	const currentYear = new Date().getFullYear();
	const yearDiff = year - currentYear;
	//const birthYear = currentYear - age; // Don't actually need this
	const newAge = age + yearDiff;
  
	if (newAge < 0) {
	  return `The year ${year} was ${Math.abs(newAge)} years before you were born`
	} else if (newAge > age) {
	  /* // I was overcomplicating this, and realized midway
	  let inFuture = year - currentYear;
	  let futureAge = age + inFuture;
	  return `You will be ${futureAge} in the year ${year}`
	  */
	  return `You will be ${newAge} in the year ${year}`; 
	} else {
	  return `You were ${newAge} in the year ${year}`;
	}
  }
  
  // Once your function is written, write function calls to test your code!
  console.log(howOld(20, 2019))

/* 13. Fix the broken code (round 2)! */
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'

/* 14. tipCalculator() */
// Write your function here:
function tipCalculator(quality, total) {
	switch(quality){
	  case 'bad':
		return total * .05;
	  case 'ok':
		return total * .15;
	  case 'good':
		return total * .20;
	  case 'excellent':
		return total * .30;
	  default:
		return total * .18;
	}
  }
  
  // Uncomment the line below when you're ready to try out your function
   console.log(tipCalculator('good', 100)) //should return 20
  
  // We encourage you to add more function calls of your own to test your code!
  console.log(tipCalculator('meh', 47))

/* 15. toEmoticon() */
// Write your function here:
function toEmoticon(emote){
	switch(emote) {
	  case 'shrug':
		return '|_{"}_|';
	  case 'smiley face':
		return ':)';
	  case 'frowny face':
		return':(';
	  case 'winky face':
		return ';)';
	  case 'heart':
		return '<3';
	  default:
		return '|_(* ~ *)_|';
	}
  }
  
  // Uncomment the line below when you're ready to try out your function
   console.log(toEmoticon("whatever")) 
  // Should print  '|_(* ~ *)_|'
  
  // We encourage you to add more function calls of your own to test your code!
  console.log(toEmoticon('shrug'))

/* JavaScript Practice: Data Types, Conditional, Functions */

/* 1. colorMessage() */
// Create function below
function colorMessage(favoriteColor, shirtColor) {
	if (favoriteColor === shirtColor){
	  return 'The shirt is your favorite color!';
	} else {
	  return 'That is a nice color.';
	}
  }
  
  console.log(colorMessage('blue', 'red')); // My test call

/* 2. isEven() */
// Write function below
function isEven(number) {
	if (number % 2 === 0) {
	  return true;
	} else {
	  return false;
	}
  }
  
  console.log(isEven(3)) // My test call

/* 3. numberDigits() */
// Create function here 
function numberDigits(x){
	if (x < 0 || x > 99) {
	  return `The number is: ${x}`;
	} else if (x < 10) {
	  return `One digit: ${x}`;
	} else {
	  return `Two digits: ${x}`;
	}
  }
  
  console.log(numberDigits(9)); // My test call
