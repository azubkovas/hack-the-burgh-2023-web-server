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
// const mongoURI = process.env.MONGO_URI;

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});
// let urlPairSchema = new mongoose.Schema({
//   original_url: String,
//   short_url: {type: Number, unique: true}
// })
// let UrlPair = mongoose.model('UrlPair', urlPairSchema);

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
