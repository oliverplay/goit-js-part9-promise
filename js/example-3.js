const horses = ['Eclipse', 'West Australian', 'Flying Fox', 'Buffalo'];

const refs = {
  startBtn: document.querySelector('.js-race-btn'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-result-table > tbody'),
};

let raceCount = 0;

refs.startBtn.addEventListener('click', handleBtnClick);

function handleBtnClick() {
  const promises = horses.map(run);
  raceCount += 1;

  updateWinnerFiled('');
  updateProgressField('race has started, bids are not accepted');
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerFiled(` 🎉 ${horse} won, finished in ${time} time`);
    updateResultTable({ horse, time, raceCount });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgressField(' 💼 race has finished, bids are accepted');
  });
}

function updateWinnerFiled(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultTable({ horse, time, raceCount }) {
  const tr = `<tr><td>${raceCount}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
