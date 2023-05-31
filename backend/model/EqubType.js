const mongoose = require("mongoose");

const equbTypeSchema = new mongoose.Schema({
  equb_type_name: { type: String, required: true },
  amount_of_deposit: { type: Number, required: true },
  number_of_members: { type: Number, required: true },
});

module.exports = mongoose.model("EqubType", equbTypeSchema);
