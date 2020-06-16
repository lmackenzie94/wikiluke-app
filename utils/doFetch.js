const doFetch = (endpoint = '', method, body) => {
  return fetch(`https://wikiluke.herokuapp.com/${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body), // body data type must match "Content-Type" header
  });
};

export default doFetch;
