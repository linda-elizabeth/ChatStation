const dotenv = require("dotenv").config();
//accessing mongoose package
const mongoose = require("mongoose");
//database connection
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  { useFindAndModify: false }
);

//schema definition
const Schema = mongoose.Schema;
//constructor
const msgSchema = new Schema({
  messages: [
    {
      sender: String,
      time: String,
      text: String,
    },
  ],
  groupid: String,
});

//model creation
var Msgdata = mongoose.model("msgdata", msgSchema);
//exporting the model
module.exports = Msgdata;
