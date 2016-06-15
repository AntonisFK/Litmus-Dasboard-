var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TempSchema = new mongoose.Schema({

  temp : Number,
  info: String,
  created_at: {type: Date, default: Date.now}

})

mongoose.model('Temp', TempSchema )