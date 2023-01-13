import './style.css';
import registerNewGame from './modules/game.js';

registerNewGame('monicahs');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/c0Kl9crOIDTmH3nrtoHL/scores/';

const form = document.querySelector('.data-form');
const refreshBtn = document.querySelector('.btn-refresh');
const postData = (name, scores) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score: scores,
    }),
  })
    .then(() => {
      refreshBtn.click();
    });
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.querySelector('.name-data');
  const scores = document.querySelector('.score-data');
  if (name.value && scores.value) {
    const obj = {
      name: name.value,
      scores: scores.value,
    };

    postData(obj.name, obj.scores);
    name.value = '';
    scores.value = '';
  }
});

const getScoresData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

refreshBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const data = await getScoresData();
  const { result } = data;
  result.sort((a, b) => b.score - a.score);
  const ul = document.querySelector('.ul-li');
  ul.innerHTML = '';

  // for (const i in result) {
  for (let i = 0; i < result.length; i += 1) {
    ul.innerHTML += `<li>${result[i].user} : ${result[i].score}  </li>`;
  }
});

refreshBtn.click();