const express = require('express')
const app = express()
const port = 3000

const captureForGoodMeasure = require('./handlers/captureForGoodMeasure')

app.post('/', captureForGoodMeasure)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
