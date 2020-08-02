const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput==='rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb') {
      return userInput;
    } else {
      return 'Invalid choice!';
    }
  }
  
  // test user choice
  // console.log("User Choice:",getUserChoice('paper'));
  
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
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
  // test computer choice
  // console.log("Computer Choice:",getComputerChoice());
  
    function determineWinner(userChoice, computerChoice){
  
    if(userChoice===computerChoice){
      return 'Tie';
    } else {

    if (userChoice==='Invalid choice!') {
        return 'Error: Missing user input.';
    }

      if (userChoice==='bomb') {
          return 'User Won!';
      }
  
      if (userChoice === 'rock') {
        if(computerChoice==='paper'){
          return 'Computer Won!';
        } else {
          return 'User Won!';
        }
      }
  
      if (userChoice === 'paper') {
        if(computerChoice==='rock'){
          return 'User Won!';
        } else {
          return 'Computer Won!';
        }
      }
  
      if (userChoice === 'scissors') {
        if(computerChoice==='paper'){
          return 'User Won!';
        } else {
          return 'Computer Won!';
        }
      }
    }
  }
  
  function playGame(){
    userChoice = getUserChoice('paper');
    computerChoice = getComputerChoice();
    console.log(`User Choice: ${userChoice}`)
    console.log(`Computer Choice: ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();