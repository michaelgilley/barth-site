
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
  var q = barth.daily({textOnly: true})
  console.log('Quote', q)
  res.render('index.jade', {quote: q})
})

app.listen(process.env.PORT || 4000)
