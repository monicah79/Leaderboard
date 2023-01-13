const scoreBoardURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const registerNewGame = (gameName) => {
  fetch(scoreBoardURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: gameName,
    }),
  });
  // .then((response) => {

  // });
};
export default registerNewGame;