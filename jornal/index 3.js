//import modulo externo
import express from 'express'

// import modulo interno
import path from 'path'

// iniciei o express
const app = express()

app.use(express.static('public'))

// primeira rota
app.get('/index', function (req, res) {
  res.send('INICIO')
})

// segunda rota
app.get('/perna', function (req, res) {
    res.send('PERNA BIONICA')
  })

  app.get('/vision', function (req, res) {
    res.send('VISION PRO')
  })

  app.get('/aircar', function (req, res) {
    res.send('AIR CAR')
  })

  app.get('/robos', function (req, res) {
    res.send('ROBÔS HUMANOIDES')
  })

  app.get('/html', function (req, res) {
    let end = path.resolve('index.html')
    res.sendFile(end)
  })

app.listen(3000, ()=>{console.log("Funcionando na porta 3000")})