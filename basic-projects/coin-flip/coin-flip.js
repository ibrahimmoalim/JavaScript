let score= JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
}
updateScore()

function playGame(guess){

  const n=Math.random()
  const result= n < 0.5 ? 'Heads' : 'Tails';
  if (guess===result){
  score.wins++;
  } else {
    score.losses++;
  }
  localStorage.setItem('score', JSON.stringify(score));


  flipResult()
  function flipResult(){
    const gameResult= guess===result ? document.querySelector('.js-result')
    .innerHTML = `coin flip: ${result} - You win.` : document.querySelector('.js-result')
    .innerHTML = `coin flip: ${result} - You lose.`;
  } 

  updateScore()
  
}

function updateScore(){
  document.querySelector('.js-score')
    .innerHTML = `wins: ${score.wins} - losses: ${score.losses}`
}

function refresh(){
  if (score.wins=== 0 && score.losses === 0){
    document.querySelector('.js-result')
    .innerHTML = '';
  document.querySelector('.js-score')
    .innerHTML = '';
  }
}