const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number,
  book: String,
});

module.exports = mongoose.model("Authors", authorSchema);
