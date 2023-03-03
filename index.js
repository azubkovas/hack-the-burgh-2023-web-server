require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const URL = require('url').URL;
const dns = require('dns')
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

mongoose.set('strictQuery', false);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('mongoDB connected');
}).catch((err) => {
    console.log('connection to mongoDB failed');
    console.log(err);
})

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/api/test', function(req, res) {
  res.send('tavo mama');
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
