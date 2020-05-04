const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const captureForGoodMeasure = require('./handlers/captureForGoodMeasure')
const noop = (request, response) => response.end()

app.get('/noop', noop)
app.post('/noop', noop)
app.post('/capture', express.json(), captureForGoodMeasure)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
