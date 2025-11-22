// player vs computer part

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  }

const displayScore = document.querySelector('.js-score')
const displayResult = document.querySelector('.js-result')
const displayPicks = document.querySelector('.js-picks')

updateScore()

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

  displayPicks.innerHTML = `You picked: <img class="images1" src="icons/${playerMove}-emoji.png">  computer picked: <img class="images1" src="icons/${computerMove}-emoji.png">`

  displayResult.innerHTML = result
  updateScore()
}

function updateScore(){
  displayScore.innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`
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
  displayPicks.innerHTML = ''
  displayResult.innerHTML = ''
  localStorage.removeItem('score')
}


// clanker vs clanker part


let computer1Score = JSON.parse(localStorage.getItem('computer1Score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  }

let computer2Score = JSON.parse(localStorage.getItem('computer2Score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  }

const displayComputer1Score = document.querySelector('.js-computer1-score')
const displayComputer2Score = document.querySelector('.js-computer2-score')
const displayComputerResult = document.querySelector('.js-computer-result')
const displayComputerPicks = document.querySelector('.js-computer-picks')

updateComputerScore()

let isAutoPlaying = false;
let intervalId;


function autoPlay(){

  if (!isAutoPlaying){
    intervalId = setInterval(() => {
    let computerMove = pickComputerMove()
    let computerTwoMove = pickComputerTwoMove()

    let computerResult = ''

    if (computerMove === computerTwoMove){
      computerResult = 'Tie'
      computer1Score.ties++
      computer2Score.ties++
    } else if (computerMove === 'rock' && computerTwoMove === 'paper'){
      computerResult = 'Clanker2 wins'
      computer2Score.wins++
      computer1Score.losses++
    } else if (computerMove === 'paper' && computerTwoMove === 'scissors'){
      computerResult = 'Clanker2 wins'
      computer2Score.wins++
      computer1Score.losses++
    } else if (computerMove === 'scissors' && computerTwoMove === 'rock'){
      computerResult = 'Clanker2 wins'
      computer2Score.wins++
      computer1Score.losses++
    } else {
      computerResult = 'Clanker1 wins'
      computer1Score.wins++
      computer2Score.losses++
    }

    localStorage.setItem('computer1Score', JSON.stringify(computer1Score))
    localStorage.setItem('computer2Score', JSON.stringify(computer2Score))

    displayComputerPicks.innerHTML = `Clanker1 picked: <img class="images1" src="icons/${computerMove}-emoji.png">  Clanker2 picked: <img class="images1" src="icons/${computerTwoMove}-emoji.png">`

    displayComputerResult.innerHTML = computerResult

    updateComputerScore()

    }, 1000);
    
    isAutoPlaying = true;
  }
}

function stopAutoPlay(){
  displayComputerPicks.innerHTML = ''
  displayComputerResult.innerHTML = ''
  clearInterval(intervalId);
  isAutoPlaying = false;
}

function updateComputerScore(){
  displayComputer1Score.innerHTML = `Clanker1: wins: ${computer1Score.wins}, losses: ${computer1Score.losses}, ties: ${computer1Score.ties}`
  displayComputer2Score.innerHTML = `Clanker2: wins: ${computer2Score.wins}, losses: ${computer2Score.losses}, ties: ${computer2Score.ties}`
}

function pickComputerTwoMove(){
  let computerTwoMove = Math.random();

  if (computerTwoMove < 0.33){
    computerTwoMove = 'rock'
  } else if (computerTwoMove <= 0.66 && computerTwoMove >= 0.33){
    computerTwoMove = 'paper'
  } else if (computerTwoMove > 0.66){
    computerTwoMove = 'scissors'
  }

  return computerTwoMove;
}

function resetComputerScore(){
  displayComputerPicks.innerHTML = ''
  displayComputerResult.innerHTML = ''
  localStorage.removeItem('computer2Score')
  localStorage.removeItem('computer1Score')
  computer1Score.wins = 0
  computer1Score.losses = 0
  computer1Score.ties = 0
  computer2Score.wins = 0
  computer2Score.losses = 0
  computer2Score.ties = 0
  updateComputerScore()
}