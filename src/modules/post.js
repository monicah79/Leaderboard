const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/viE6AaehEYIIOYRfWDeM/scores/';
const postData = async (name, scores) => {
  const response = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score: scores,
    }),
  })
    const data = await response.json()
    return data.result
};
export default postData;