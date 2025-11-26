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

document.querySelector('.js-rock')
	.addEventListener('click', () => playGame('Rock'));

document.querySelector('.js-paper')
	.addEventListener('click', () => playGame('Paper'));

document.querySelector('.js-scissors')
	.addEventListener('click', () => playGame('Scissors'));


document.body.addEventListener('keydown', (event) => {
	if (event.key === 'r'){
		playGame('Rock')
	} else if (event.key === 'p'){
		playGame('Paper')
	} else if (event.key === 's'){
		playGame('Scissors')
	}
})


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

document.body.addEventListener('keydown', (event) => {
	if (event.key === 'Escape'){
		document.querySelector('.js-confirmation')
			.innerHTML = `
				<span>Are you sure you want to <strong>reset</strong> the <strong>score</strong></span>
				<button class="yes">Yes</button>
				<button class="no">No</button>
			`
		document.querySelector('.yes')
			.addEventListener('click', () => {
				document.querySelector('.js-player-result')
					.innerHTML = ''
				document.querySelector('.js-result')
					.innerHTML = ''
				score.wins=0;
				score.losses=0;
				score.ties=0;
				localStorage.removeItem('score');
				updateScore();
				document.querySelector('.js-confirmation')
					.innerHTML = ''
			})
		
		document.querySelector('.no')
			.addEventListener('click', () => document.querySelector('.js-confirmation').innerHTML = '');
	}
});

document.querySelector('.reset-score')
	.addEventListener('click', () => {
		document.querySelector('.js-confirmation')
			.innerHTML = `
				<span>Are you sure you want to <strong>reset</strong> the <strong>score</strong></span>
				<button class="yes">Yes</button>
				<button class="no">No</button>
			`
		document.querySelector('.yes')
			.addEventListener('click', () => {
				document.querySelector('.js-player-result')
				.innerHTML = ''
				document.querySelector('.js-result')
					.innerHTML = ''
				score.wins=0;
				score.losses=0;
				score.ties=0;
				localStorage.removeItem('score');
				updateScore();
				document.querySelector('.js-confirmation')
					.innerHTML = ''
			})
		
		document.querySelector('.no')
			.addEventListener('click', () => document.querySelector('.js-confirmation').innerHTML = '');
	})


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

const autoplayButton = document.querySelector('.js-autoplay')

autoplayButton.addEventListener('click', () => autoplay());
autoplayButton.addEventListener('click', () => {
	if (autoplayButton.innerHTML === 'AutoPlay'){
		autoplayButton.innerHTML = 'Stop AutoPlay'
	} else {
		autoplayButton.innerHTML = 'AutoPlay'
	}
});

document.body.addEventListener('keydown', (event) => {
	if (event.key === 'a'){
		autoplay()
		if (autoplayButton.innerHTML === 'AutoPlay'){
			autoplayButton.innerHTML = 'Stop AutoPlay'
		} else {
			autoplayButton.innerHTML = 'AutoPlay'
		}
	}
});

let isAutoPlaying = false;
let intervalId;

function autoplay(){
	
	if (!isAutoPlaying){
		intervalId = setInterval(() => {
			const computerTwoMove = pickAiMove()
			const computerOneMove = pickAiMove()

			let result = ''
	
			if (computerOneMove === computerTwoMove) {
				result = 'Tie'
				score.ties++
			} else if (computerOneMove === 'Rock' && computerTwoMove === 'Paper') {
				result = 'You win'
				score.wins++
			} else if (computerOneMove === 'Paper' && computerTwoMove === 'Scissors') {
				result = 'You win'
				score.wins++
			} else if (computerOneMove === 'Scissors' && computerTwoMove === 'Rock') {
				result = 'You win'
				score.wins++
			} else {
				result = 'You lose'
				score.losses++
			}

			document.querySelector('.js-player-result')
				.innerHTML = result

			document.querySelector('.js-result')
				.innerHTML = `You picked: <img class="move-icon" src="icons/${computerOneMove}-emoji.png"> - Computer picked: <img class="move-icon" src="icons/${computerTwoMove}-emoji.png">`

		}, 1000);
		isAutoPlaying = true;
	} else {
		document.querySelector('.js-player-result')
			.innerHTML = ''
		document.querySelector('.js-result')
			.innerHTML = ''
		clearInterval(intervalId);
		isAutoPlaying = false;
	}
};

