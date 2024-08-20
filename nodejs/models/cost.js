const mongoose = require('mongoose');

const CostSchema = new mongoose.Schema({

  eventdate: {
    type: Date,
    required: true
  },
  description:{
    type: String,
    required:true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Cost', CostSchema);