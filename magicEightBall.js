let userName = 'Tim';
let userQuestion = 'Will this course be worth it?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// Greet the user
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

// State what was asked - and point out if no question was asked
userQuestion ? 
  userName ? console.log(`${userName} asked, \'${userQuestion}\'.`) 
          : console.log(`You asked, \'${userQuestion}\'.`) 
  : userName ? console.log(`${userName} didn\'t actually ask a question.`) 
          : console.log('You didn\'t actually ask a question.')

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Umm, not really sure how this happened... Ask later maybe?';
    break;
}

console.log(`The Magic Eight Ball says... \'${eightBall}\'!`);