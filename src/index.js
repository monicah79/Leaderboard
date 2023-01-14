import './style.css';
import registerNewGame from './modules/game.js';
import postData from './modules/post.js';

registerNewGame('monicahs');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/viE6AaehEYIIOYRfWDeM/scores/';

const form = document.querySelector('.data-form');
const refreshBtn = document.querySelector('.btn-refresh');

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

  for (let i = 0; i < result.length; i += 1) {
    ul.innerHTML += `<li>${result[i].user} : ${result[i].score}  </li>`;
  }
});

refreshBtn.click();