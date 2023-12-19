if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const port = process.env.PORT || 3000

// Setting up views and partials
app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

// Setting up static directory
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    author: 'Elmir Ismayilzada'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    description: `Elmir Ismayilzada − Frontend Engineer • Skilled in JavaScript, TypeScript, Vue.js, Nuxt.js, Node.js`,
    author: 'Elmir Ismayilzada'
  })
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    res.status(400)
    return res.send({
      error: 'You must provide an address or city name'
    })
  }
  geocode(req.query.address, (error, geoData) => {
    if (!error) {
      forecast(geoData, (error, forecastData) => {
        if (!error) {
          const data = {
            forecast: forecastData,
            location: geoData.location,
            address: req.query.address
          }
          res.send(data)
        } else {
          res.status(404)
          res.send({
            error: error
          })
        }
      })
    } else {
      res.status(404)
      res.send({
        error: error
      })
    }
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    author: 'Elmir Ismayilzada',
    errorMessage: 'Page not found.'
  })
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})
