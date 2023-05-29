import axios from 'axios'

const getCoordinates = async (city, token) => {
  const { data } = await axios.get(
    'http://api.openweathermap.org/geo/1.0/direct',
    {
      params: {
        q: city,
        appid: token,
        limit: 1,
      },
    }
  )

  const cityCoords = data[0]

  return cityCoords
}

export { getCoordinates }
