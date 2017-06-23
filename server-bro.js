const fs = require('fs');
const path = require('path');
const fsPath = require('fs-path')
const mkdirp = require('mkdirp')
const node = path.basename(process.argv[0]);
const file = path.basename(process.argv[1]);

if (process.argv.length = 4 && process.argv[4] === 'bro') {
  //creates the views folder
  mkdirp('./views', function(err) {
    if (err) console.error(err)
    else console.log('view folder created, bro!')
  });
  //creates the public folder
  mkdirp('./public', function(err) {
    if (err) console.error(err)
    else console.log('view folder created, bro!')
  });
  //creates the routes folder
  mkdirp('./routes', function(err) {
    if (err) console.error(err)
    else console.log('view folder created, bro!')
  });

  //creates the index.ejs file inside the views folder
  fs.writeFile('./views/index.ejs', 'Ready to go, bro!', 'utf8', (err) => {
    if (err) throw err;
    console.log(`your index.ejs is ready bro!`)
  })
  //creates the error.ejs file inside the views folder
  fs.writeFile('./views/error.ejs', `<h1><%= message %></h1>
  <h2><%= error.status %></h2>
  <pre><%= error.stack %></pre>`, 'utf8', (err) => {
    if (err) throw err;
    console.log(`your index.ejs is ready bro!`)
  })

  //Creates the server.js file in the main project directory
  fs.writeFile('server.js', `var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var port = process.env.PORT || 8000;
var getScripts = require('./routes/routes');



var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.use(express.static('public'));
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', getScripts);




app.listen(port, function() {
  console.log('listening on: ', port);
})
`, 'utf8', (err) => {
    if (err) throw err;
    console.log(`your server.js is ready, bro!`)
  })

  //creates the routes.js file inside the routes folder
  fs.writeFile('./routes/routes.js', `var express = require('express');
var router = express.Router();
var vehicles = require('../db/config').vehicles;


const getter = address => (route, obj) => router.get(address, (req, res) => res.render(route, obj))

const getterOne = address => (route, obj) => router.get(address, (req, res) => {
  res.render(route, {
    vehiclesList: vehicles.find({
      id: parseInt(req.params.id)
    })
  })

})



getter('/')('index');
getterOne('')('');


module.exports = router;
`, 'utf8', (err) => {
    if (err) throw err;
    console.log(`your routes.js is ready, bro!`)
  })

  //creates the style.css file inside the public folder
  fs.writeFile('./public/style.css', 'Testing it out yo!', 'utf8', (err) => {
    if (err) throw err;
    console.log(`your style.css is ready, bro!`)
  })

  //creates the package.json file in the main project directory
  fs.writeFile('package.json', `{
  "name": "",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.17.2",
    "cors": "^2.8.3",
    "ejs": "^2.5.6",
    "express": "^4.15.3",
  }
}`, 'utf8', (err) => {
    if (err) throw err;
    console.log(`your index.ejs is ready bro!`)
  })

  fs.writeFile('.gitignore', 'node_modules/', 'utf8', (err) => {
    if (err) throw err;
    console.log(`your .gitignore is ready, bro!`)
  })

} else {
  console.log(`Sorry, try saying ${node} ${file} server me bro`);
  process.exit(1);
}