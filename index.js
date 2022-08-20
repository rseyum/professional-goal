const express = require('express')
const app = express()
const port = 3000

var data = require('./data/test.json');

app.set('view engine','ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));
app.use("/img", express.static(__dirname))



app.get('/', (req, res) => {
  var title = "Welcome to my Page!"
  var heading = "Rahel Seyum Year Up student!"
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
});

app.get('/Skills', (req, res) => {
  var title = "My front-end Skills!"
  var heading = 'My Website'
  res.render('pages/skills',{
    'title':title,
    'heading':heading
  })
});

app.get('/Education', (req, res) => {
  var title = "Year Up Application Dev!"
  var heading = 'Year Up '
  res.render('pages/education',{
    'title':title,
    'heading':heading
  })
});

app.get('/Hobbies', (req, res) => {
  var title = "My Hobbies!"
  var heading = 'Top Hobbies'
  res.render('pages/hobbies',{
    'title':title,
    'heading':heading
  })
});

app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 var heading = "My website"
 res.render('users/view', {
     title: title,
     heading:heading,
     user: data[--id]
 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data);
})