const mongoose = require("mongoose");

const equbTypeSchema = new mongoose.Schema(
  {
    equb_type_name: { type: String, required: true },   
  },
 
);

module.exports = mongoose.model("EqubType", equbTypeSchema);
