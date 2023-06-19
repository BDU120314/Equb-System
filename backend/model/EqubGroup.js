const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  group_name: { type: String, required: true },
  start_date: { type: Date, default: null },
  equb_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EqubType",
    required: true,
  },
  amount_of_deposit: { type: Number, required: true },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  status: { type: String, default: "Pending" },
  total_Members: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Pre-save hook to automatically set the start_date when members length is equal to total_Members
groupSchema.pre("save", function (next) {
  if (this.isModified("members") && this.members.length === this.total_Members) {
    this.start_date = new Date();
  }
  next();
});

module.exports = mongoose.model("EqubGroup", groupSchema);
