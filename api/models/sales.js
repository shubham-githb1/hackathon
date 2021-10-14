const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    sales: {
      type: Array,
      default: [],
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);