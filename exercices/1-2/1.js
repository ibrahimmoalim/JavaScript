/*const hour= 18;
  const name= 'Ibrahim';
  if (hour >=6 && hour <=12){
    console.log(`Good Morning ${name}!`);
  } else if (hour >12 && hour <=17){
    console.log(`Good Afternoon ${name}!`);
  } else {
    console.log(`Good Night ${name}!`);
  }*/

/*const age= 5;
const holiday= 0;
if (!holiday && age <=6 || age >=65){
  console.log('Discount');
} else {
  console.log('No discount');
}*/


let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
}

function playGame(guess) {

  const n = Math.random()
  const result = n < 0.5 ? 'Heads' : 'Tails';
  if (guess === result) {
    score.wins++;
  } else {
    score.losses++;
  }
  localStorage.setItem('score', JSON.stringify(score));

  if (guess === result) {
    alert(` coin flip: ${result}, You win.\n\n wins: ${score.wins}     losses: ${score.losses}`)
  } else {
    alert(` coin flip: ${result}, You lose.\n\n wins: ${score.wins}     losses: ${score.losses}`)
  }
}