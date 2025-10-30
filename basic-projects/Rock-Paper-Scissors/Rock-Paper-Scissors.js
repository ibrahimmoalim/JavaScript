let score= JSON.parse(localStorage.getItem('score')) || {
          wins: 0,
          losses: 0,
          ties: 0
        };

updateScore()

/*
if (!score){
  score={
    wins: 0,
    losses: 0,
    ties: 0
  }
}
*/

function playGame(playerMove){
  const AiMove= pickAiMove();

  result='';

  if (playerMove==='Scissors'){
    if (AiMove==='Rock') {
      result= 'You lose.';
    } else if (AiMove==='Paper') {
      result= 'You win.';
    } else if (AiMove==='Scissors') {
      result= 'Tie.';
    }
  }
  
  else if (playerMove==='Paper'){
    if (AiMove==='Rock') {
      result= 'You win.';
    } else if (AiMove==='Paper') {
      result= 'Tie.';
    } else if (AiMove==='Scissors') {
      result= 'You lose.';
    }
  } 
  
  else if (playerMove==='Rock'){
    if (AiMove==='Rock') {
      result= 'Tie.';
    } else if (AiMove==='Paper') {
      result= 'You lose.';
    } else if (AiMove==='Scissors') {
      result= 'You win.';
    }
  }
  
  if (result==='You win.'){
    score.wins ++;
  } else if (result==='You lose.'){
    score.losses++;
  } else if (result==='Tie.'){
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore()

  document.querySelector('.js-player-result')
    .innerHTML = result
    
  document.querySelector('.js-result')
    .innerHTML = `You picked: <img class="move-icon" src="icons/${playerMove}-emoji.png"> - Computer picked: <img class="move-icon" src="icons/${AiMove}-emoji.png">`
}

function updateScore(){
  document.querySelector('.js-score')
  .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}.`
}

function refresh(){
  if (score={
    wins: 0,
    losses: 0,
    ties: 0
    }
  ){
    document.querySelector('.js-player-result')
      .innerHTML = ''
    
    document.querySelector('.js-result')
      .innerHTML = ''
  }
}

function pickAiMove(){
  const randomNumber= Math.random();
  let AiMove='';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    AiMove='Rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    AiMove='Paper';
  }
  else if (randomNumber >= 2/3 && randomNumber < 1) {
    AiMove='Scissors';
  }
  return AiMove;
}