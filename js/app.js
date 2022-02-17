/*-------------------------------- Constants --------------------------------*/
const characters = ['❤️', '💰', '⚽', '💎', '🤑']
const winningMessage =  `You have won`

/*-------------------------------- variables--------------------------------*/
 let char 
 let wins = 0

/*-------------------------------- Cached Element References--------------------------------*/

var button = document.querySelector('.spin')
var  win = document.getElementById('win')
var winnings = document.getElementById('score')

/*----------------------------- Event Listeners -----------------------------*/
button.addEventListener('click', function(event){
  return spin()
})


/*-------------------------------- Functions --------------------------------*/

function getRandomNumber() {
  var char = characters[Math.floor(Math.random() * characters.length)];
  return char
}
getRandomNumber();
function getElement(id) {
  return document.getElementById(id);
}

function spin() {
  const item1 = getElement('item1');
  const item2 = getElement('item2');
  const item3 = getElement('item3');

  getRandomNumber();
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const num3 = getRandomNumber();

  
item1.innerHTML = `${num1}`;
  item2.innerHTML = `${num1}`;
  item3.innerHTML = `${num3}`;

   if (num1 === num3){
    win.innerHTML = winningMessage    
} else {
  win.innerHTML = ''
}
  if (num1 == num3){
    wins++
    winnings.innerHTML = ` 💵Won ${wins}K $`
  } else if(num1 !== num3){
    winnings.innerHTML = ''
  }
}
