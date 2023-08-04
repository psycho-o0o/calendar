import express from 'express'
import serveStatic from 'serve-static'

var app = express()

app.use(serveStatic('public', { index: ['index.html'] }))
app.listen(3000)