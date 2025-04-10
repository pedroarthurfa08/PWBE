const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extend: false}))

app.set('viwes', 'views')

app.set('view engine', 'ejs')

app.set("/home_soma", (req, res) => {
  res.render("home_soma")
})

app.post("/soma", (req, res) => {
  n1 = Number(req.body.numero1)
  n2 = Number(req.body.numero2)
  soma = n1 + n2
  res.soma('resposta_soma', {soma: soma})
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})