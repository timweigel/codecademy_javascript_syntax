// User input here
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') {
      return userInput;
    } else if (userInput === 'paper') {
      return userInput;
    } else if (userInput === 'scissors') {
      return userInput;
    } else if (userInput === 'bomb') { // Dirty pool, old man...
      return userInput;
    } else {
      console.log('Invalid input. Valid inputs are rock, paper, or scissors.')
    }
  }
  
  // Generate input for the computer
  const getComputerChoice = () => {
    const computerInput = Math.floor(Math.random() * 3);
    switch(computerInput) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  // Determine the winner based on the rules for rock paper scissors
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie game!';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!';
      } else {
        return 'Player wins!';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins!';
      } else {
        return 'Player wins!';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer Wins!';
      } else {
        return 'Player wins!'
      }
    }
    
    // I don't believe this is strictly according to Hoyle!
    if (userChoice === 'bomb') {
      return 'Player set up us the bomb! Player wins!'
    }
  }
  
  /*
    Though the exercise doesn't specify a parameter for playGame,
    I got tired of entering it here instead of in the call to 
    playGame. So, I added a parameter.
  */
  const playGame = (userSays) => {
    const userChoice = getUserChoice(userSays);
    const computerChoice = getComputerChoice();
    console.log(`The player chose ${userChoice}!`);
    console.log(`The computer chose ${computerChoice}!`);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  // Call playGame, with my added parameter - see note on playGame above
  playGame('bomb');
  
  