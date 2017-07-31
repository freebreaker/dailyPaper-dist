const express = require('express')
const app = express()
const history = require('connect-history-api-fallback');

const index = require('./routes/index')

app.use(history({
  rewrites: [
    { from: /^\/abc$/, to: '/' }
  ]
}))

app.use(express.static('dist'))

app.use('/api',index)


app.listen(8228,() => {
    console.log('app listening on port 8228.')
})