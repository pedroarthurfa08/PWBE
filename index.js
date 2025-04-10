const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extend: false}))

app.set('viwes', 'views')

app.set('view engine', 'ejs')

app.set("/home_soma", (req, res) => {
  res.rende
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})