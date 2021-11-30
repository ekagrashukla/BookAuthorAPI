const mongoose = require('mongoose')

const User = mongoose.model(
    "User",
    new mongoose.Schema({
      username: {
        type : String,
        unique : true
      },
      booksRead: [
        {
          type: mongoose.Schema.Types.ObjectId
        }
      ]
    })
  )

module.exports = User