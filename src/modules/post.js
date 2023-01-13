const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/c0Kl9crOIDTmH3nrtoHL/scores/';
const postData = async (name, scores) => {
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
    .then((response) => response.json())
    .then((data) => data.result);
};
export default postData;