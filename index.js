const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')


//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = "Welcome to my Page!"
  var heading = "Rahel Seyum Year Up student and Front-end development passioate "
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})
app.get('/Skills', (req, res) => {
  var title = "My front-end Skills!"
  var heading = 'My Website'
  res.render('pages/skills',{
    'title':title,
    'heading':heading
  })
})
app.get('/Education', (req, res) => {
  var title = "Year Up Application Dev!"
  var heading = 'Year Up '
  res.render('pages/education',{
    'title':title,
    'heading':heading
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})