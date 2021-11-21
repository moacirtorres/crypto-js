const express = require('express')
const path = require('path')
const app = express()
const crypto = require('crypto')


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


app.get('/', (req, res) => {
    res.send('index.html')
})
app.listen(3000, () => {
    console.log('Servidor rodando...')
})