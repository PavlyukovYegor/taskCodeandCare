const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const db = require('./config/db')
const cors = require('cors')

const app = new(require('express'))()
const port = 3000
app.use(bodyParser.urlencoded({exntended: true}))
app.use(cors())

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

MongoClient.connect(db.url, (err, datebase) => {
  if (err)
    return console.log(err)

  require('./app/routes')(app, datebase)
  app.listen(port, function(error) {
    if (error) {
      console.error(error)
    } else {
      console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
    }
  })
})
