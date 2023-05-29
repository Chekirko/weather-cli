import { TOKEN_DICTIONARY, getKeyValue } from './save.service.js'
import axios from 'axios'
import { getCoordinates } from './getCoordinates.service.js'

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case '01':
      return '☀️'
    case '02':
      return '🌤️'
    case '03':
      return '☁️'
    case '04':
      return '☁️'
    case '09':
      return '🌧️'
    case '10':
      return '🌦️'
    case '11':
      return '🌩️'
    case '13':
      return '❄️'
    case '50':
      return '🌫️'
  }
}

const getWeather = async (city) => {
  const token = process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token))
  if (!token) {
    throw new Error(
      'Не заданий ключ API, задайте його через команду -t [API_KEY]'
    )
  }

  const coords = await getCoordinates(city, token)

  if (!coords) {
    throw new Error('Невірно вказано місто')
  }

  const { data } = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        lat: coords.lat,
        lon: coords.lon,
        appid: token,
        lang: 'ua',
        units: 'metric',
      },
    }
  )

  return data
}

export { getWeather, getIcon }
