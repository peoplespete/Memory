var mongoose = require('mongoose');

var Game = mongoose.Schema({
  player      : String,
  numOfCards    : Number,
  duration   : Number,
  createdAt  : {type: Date, default: Date.now}
});

mongoose.model('Game', Game);