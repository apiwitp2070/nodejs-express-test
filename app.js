const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');

const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined'));
//app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    username: 'Express Node.js',
    customers: ['John', 'Doe', 'Mary', 'Alice']
  });
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});