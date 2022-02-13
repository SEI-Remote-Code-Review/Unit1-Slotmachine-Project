/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/


/*-------------------------------- Constants Element References--------------------------------*/
button = document.querySelector('.spin')

/*----------------------------- Event Listeners -----------------------------*/
button.addEventListener('click', function(event){
  return getRandomNumber
})


/*-------------------------------- Functions --------------------------------*/

function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
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
console.log(num1)
  
item1.innerHTML = `${num1}`;
  item2.innerHTML = `${num1}`;
  item3.innerHTML = `${num3}`;

  // if (num1 === num2 && num1 === num3) {
  //     playBoing();
  //     showMessage();
  // } else {
  //     hideMessage();
  // }
}
spin();

// function playBoing() {
//   const boing = document.getElementById("boing");
//   boing.play();
// }

function showMessage() {
  const msg = document.getElementById("message");
  msg.style.display = "block";
  msg.classList.add('animated', 'pulse')
}

// function hideMessage() {
//   const msg = document.getElementById("message");
//   msg.style.display = "none";
// }