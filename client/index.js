// requirements
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

// express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/auth', authRoutes);

// run server
app.listen(3000, () => { console.log('Server listing on port 3000') });