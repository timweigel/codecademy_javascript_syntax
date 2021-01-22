/*
	The final project from the JavaScript Syntax, Part I module of the 
	Back-End Engineer track. *sniff* We grow up so fast! *sniff*
*/

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
	return Math.floor(Math.random() * 10);
}

/*
	I added this as part of the challenge, and commented out
	the previous declarations of humanGuess and computerGuess
	in compareGuesses().
*/
function getAbsoluteDistance(guess, secret) {
	return Math.abs(secret - guess);
}

function compareGuesses(human, computer, secret) {
	//let humanGuess = Math.abs(secret - human);
	let humanGuess = getAbsoluteDistance(human, secret)
	//let computerGuess = Math.abs(secret - computer);
	let computerGuess = getAbsoluteDistance(computer, secret);

	/*
		I added the range check and alert as part of the challenge. By 
		using an else after the range check, it won't return true if the
		number is out of range. Gotta follow the rules!
	*/
	if (human < 0 || human > 9) {
		window.alert(`Your guess, ${human}, is out of range!`);
	} else {
		return humanGuess <= computerGuess;
	}
	/*
		The code below was my original flow control logic. I wish I had 
		thought of the much simpler expression above, but I didn't - 
		someone else pointed it out and I also see it's how it's done
		in the solution. This is something I expect will come naturally 
		in the future with practice! The code below worked just fine, it's 
		just not as simple as it could be.
	*/
	/*
	} else if (humanGuess <= computerGuess) {
		return true;
	} else {
		return false;
	}
	*/
}

function updateScore(winner) {
	switch(winner){
		case 'human':
			humanScore++;
			break;
		case 'computer':
			computerScore++;
			break;
	}
}

function advanceRound() {
	currentRoundNumber++;
}