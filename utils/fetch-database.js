let versChoose = document.querySelector('select');
let poemDisplay = document.querySelector('pre');

versChoose.onchange = function () {
  let vers = versChoose.value;
  updateDisplay(vers);
};

function updateDisplay(vers) {
  vers = vers.replace(' ', '');
  vers = vers.toLowerCase();
  let url = vers + '.txt';

  fetch(`../database/${url}`)
    .then((response) => response.text())
    .then((text) => {
      poemDisplay.textContent = text;
    })
    .catch((error) => console.log(error.message));
}

updateDisplay('Vers 2018');
versChoose.value = 'Vers 2018';
