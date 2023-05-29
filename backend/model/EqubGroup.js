const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  group_name: { type: String, required: true },
  start_date: { type: Date, required: true },
  equb_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EqubType",
    required: true,
  },
  amount_of_deposit: { type: Number, required: true },
  total_cycles: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("EqubGroup", groupSchema);
