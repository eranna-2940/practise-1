const getInputValue = document.getElementById('inputValue');
const returnResult = document.getElementById('currentResult');
const returnHistory = document.getElementById('resultHistory');

window.onload = function () {
  document.getElementById('number-submit').addEventListener('click', playGame);
  document.getElementById('restart-game').addEventListener('click', resetGame);
};

var randomNumber = Math.floor(Math.random() * 100) + 1;

var historyArray = [];

function playGame () {
    console.log(getInputValue)
  var createHistoryElement = document.createElement('div');
  createHistoryElement.classList.add('list-group-item');
  createHistoryElement.innerText = 'You guessed ' + getInputValue.value;
  returnHistory.append(createHistoryElement);

  historyArray.push(getInputValue.value);

 
 // console.log(historyArray);
  if (getInputValue.value === '') {
    returnResult.innerHTML =
      '<div class="alert alert-primary">Please Enter no</div>';
  } else if (getInputValue.value > 100) {
    returnResult.innerHTML =
      '<div class="alert alert-danger">Please Enter no between 1 to 100</div>';
  } else {
    if (getInputValue.value > randomNumber) {
      returnResult.innerHTML =
        '<div class="alert alert-warning">Your guess is too high!</div>';
    } else if (getInputValue.value < randomNumber) {
      returnResult.innerHTML =
        '<div class="alert">Your guess is too low!</div>';
        returnResult.style.backgroundColor ='red'
    } else {
      returnResult.innerHTML =
        '<div class="alert">Awesome job, you got it!</div>';
        returnResult.style.backgroundColor ='gray'
    }
  }
};

function resetGame(){
  returnResult.innerHTML = '';
  randomNumber = Math.floor(Math.random() * 100) + 1;
  returnHistory.innerHTML = '';
  historyArray = [];
};