const mongoose = require('mongoose');

var cartSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        count: Number,
        price: Number,
        title: String,
        description: String,
      },
    ],
    cartTotal: Number,
    orderby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    state: {
      type: String,
      default: 'processing',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);