import got from 'got'

export const getWeather = function(req, res) {
  const city = req.params.city || 'London'

  const apiKey = process.env.WEATHER_API
  if (!apiKey) {
    throw new Error('WEATHER API MISSING!!')
  }

  got(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
  )
    .then(response => {
      const responseObject = JSON.parse(response.body)
      console.log(responseObject)
      res.json({
        city,
        weather: responseObject.weather.map(x => x.main),
      })
    })
    .catch(error => {
      console.log(error)
      res.status(500)
    })
}
