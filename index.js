
var express = require('express')
  , morgan = require('morgan')
  , app = express()
  , quotes = require('./data').quotes

app.set('views', __dirname + '/views')

if (app.get('env') === 'development') {
  app.use(morgan('dev'))
}

app.use(express.static('./public'))

app.get('/', function(req, res) {
  var pick = Math.floor(Math.random() * quotes.length)
  res.render('index.jade', {quote: quotes[pick].text})
})

app.listen(process.env.PORT || 4000)
