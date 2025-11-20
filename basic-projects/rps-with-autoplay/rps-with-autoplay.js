let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  }

function playGame(playerMove){

  let computerMove = pickComputerMove()

  let result = ''

  if (computerMove === playerMove){
    result = 'Tie'
    score.ties++
  } else if (computerMove === 'rock' && playerMove === 'paper'){
    result = 'You win'
    score.wins++
  } else if (computerMove === 'paper' && playerMove === 'scissors'){
    result = 'You win'
    score.wins++
  } else if (computerMove === 'scissors' && playerMove === 'rock'){
    result = 'You win'
    score.wins++
  } else {
    result = 'You lose'
    score.losses++
  }

  localStorage.setItem('score', JSON.stringify(score))

  document.querySelector('.js-picks').innerHTML = `You picked: <img class="images1" src="icons/${playerMove}-emoji.png">  computer picked: <img class="images1" src="icons/${computerMove}-emoji.png">`

  document.querySelector('.js-result').innerHTML = `${result}`

  document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`
}



function pickComputerMove(){
  let computerMove = Math.random();

  if (computerMove < 0.33){
    computerMove = 'rock'
  } else if (computerMove <= 0.66 && computerMove >= 0.33){
    computerMove = 'paper'
  } else if (computerMove > 0.66){
    computerMove = 'scissors'
  }

  return computerMove;
}

function resetScore(){
  score.wins = 0
  localStorage.removeItem('score')
}