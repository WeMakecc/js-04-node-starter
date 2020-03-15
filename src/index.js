import express from 'express'
import cors from 'cors'

import { getVersion } from './version'
import { getWeather } from './weather'

require('dotenv').config()

const port = 3000
const app = express()

// Enable All CORS Requests
// DO NOT USE in production
app.use(cors())
app.options('*', cors())

// curl 127.0.0.1:3000
app.get('/', function(req, res) {
  console.log('get /')
  res.send('Hello')
})

// curl 127.0.0.1:3000/color
app.get('/color', function(req, res) {
  console.log('get /color')
  res.json({ r: 255, g: 100, b: 50 })
})

// curl 127.0.0.1:3000/versions
app.get('/versions', getVersion)

// curl 127.0.0.1:3000/weather
app.get('/weather/', getWeather)
// curl 127.0.0.1:3000/weather/Milano
app.get('/weather/:city', getWeather)

app.listen(port, () => {
  console.log(`The server is up and running at http://127.0.0.1:${port}`)
})
