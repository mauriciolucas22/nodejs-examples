const express = require('express');
const bodyParser = require('body-parser');
const load = require('express-load');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const methodOverride = require('method-override')
const error = require('./middleware/error')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = 3000;

app.set('views', __dirname + '/views'); // model files and assign setting name to value
app.set('view engine', 'ejs'); // model engine used
// app.use(cookieParser('examples-express'));
app.use(session({
  secret: 'ssshhhhh',
  resave: false,
  saveUninitialized: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use this method for use put and delete
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));
// app.use(express.static(__dirname + '/public'));
  
// app.set('title', 'Jesus te ama');// assign setting name to value

load('controllers', { cwd: __dirname, verbose: true })
  .then('routes')
  .into(app)

load('sockets', { cwd: __dirname, verbose: true })
  .into(io)

server.listen(port, () => {
  console.log('Server listen on port 3000');
})

// manipulador de erros, abaixo de todas as outras funções
app.use(error.notFound);
app.use(error.serverError)