const mongoose = require("mongoose");
const eductionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a product name"],
      unique: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    sold: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const eduction = mongoose.model("eduction", eductionSchema);
module.exports = eduction;