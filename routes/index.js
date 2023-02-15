const express = require('express')

const routes = express.Router()

routes.get('/', function (req, res) {
  console.log(req.query)
    res.send('Hello World')
  })

  routes.get('/produto/:id', function (req, res) {
    console.log(req.params)
      res.send('Hello World')
    })

  routes.post('/cadastrar', function (req, res) {
    console.log(req.body)
    res.json(req.body)
  })


module.exports = routes