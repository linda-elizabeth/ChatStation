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
const userSchema = new Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  status: String,
  blocked: [
    {
      username: String,
      id: mongoose.Schema.Types.ObjectId,
    },
  ],
  muted: [
    {
      username: String,
      id: mongoose.Schema.Types.ObjectId,
    },
  ],
  groups: [
    {
      name: String,
      id: mongoose.Schema.Types.ObjectId,
    },
  ],
});
//model creation
var Userdata = mongoose.model("userdata", userSchema);
//exporting the model
module.exports = Userdata;
