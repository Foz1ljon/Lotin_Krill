const { model, Schema } = require("mongoose");

const User = new Schema({
  tgID: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("USers", User);
