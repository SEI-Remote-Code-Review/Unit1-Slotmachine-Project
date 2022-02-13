/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/


/*-------------------------------- Constants Element References--------------------------------*/


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function getRandomNumber() {
  return Math.floor(Math.random() * 2) + 1;
}

function getElement(id) {
  return document.getElementById(id);
}

function spin() {
  const item1 = getElement('item1');
  const item2 = getElement('item2');
  const item3 = getElement('item3');

  