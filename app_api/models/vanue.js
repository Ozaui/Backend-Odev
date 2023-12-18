var mongoose = require("mongoose");

var hour = new mongoose.Schema({
  days: { type: String, required: true },
  open: String,
  close: String,
  isClosed: { type: Boolean, requared: false },
});

var comment = new mongoose.Schema({
  author: { type: String, required: true },
  rating: { tyepe: Number, required: true, min: 0, max: 5 },
  text: { type: String, requared: true },
  date: { type: Date, defualt: Date.now },
});

var venue = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  rating: { type: Number, min: 0, max: 5, default: 0 },
  coordinates: { type: Number, index: "2dsphere" },
  foodanddring: [String],
  hours: [hour],
  comments: [comment],
});
mongoose.model("venue", venue, "venues");
