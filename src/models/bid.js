const mongoose = require('mongoose')

const bid = new mongoose.Schema({
   owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
},
userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
},
    petId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Pet'
  },
    amount: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})

const Bid = mongoose.model('Bid', bid)

module.exports = Bid