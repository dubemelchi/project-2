const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// database module
const db = require('./config/database');

// test
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error: ' + err));

const app = express();

// handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('index'));

app.use('/drinks', require('./routes/drinks'));

//app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));