// Fetch from API
export const doFetch = (endpoint = '', method, body) => {
  return fetch(`https://wikiluke.herokuapp.com/${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body), // body data type must match "Content-Type" header
  });
};

// Get Random Colour
const defaultColours = ['#3b754a', '#de9218', '#7a2c2c', '#3b4475', '#756C3B'];

export const getRandomColour = (colourArray = defaultColours) => {
  return colourArray[Math.floor(Math.random() * colourArray.length)]
};


// Get Random Array Item

export const getRandomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}
