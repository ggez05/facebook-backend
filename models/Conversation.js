const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const conversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Convesation", conversationSchema);
