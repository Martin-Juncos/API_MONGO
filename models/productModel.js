const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    description: String,
    categories: [String],
    created: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
