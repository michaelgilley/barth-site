
var express = require('express')
  , morgan = require('morgan')
  , app = express()
  , barth = require('barth')

app.set('views', __dirname + '/views')

if (app.get('env') === 'development') {
  app.use(morgan('dev'))
}

app.use(express.static('./public'))

app.get('/', function(req, res) {
  res.render('index.jade', {quote: barth.daily({textOnly: true, debug: true})})
})

app.listen(process.env.PORT || 4000)
