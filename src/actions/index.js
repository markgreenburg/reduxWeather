const API_KEY = '2ad4b3210e3f22d636d5c389bd55a6e3';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city = 'Houston') => {
  const query = `${URL}&q=${city},us`;
  const weatherGetter = fetch(query)
    .then((response) => response.json())
    .catch((e) => console.log(e));

  return {
    type: FETCH_WEATHER,
    payload: weatherGetter,
  };
};
