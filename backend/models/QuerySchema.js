const mongoose = require("mongoose");

const QueriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      min: 10,
    },
  },
  {
    timestamps: true,
  }
);

const TopicSchema = new mongoose.Schema({
  queryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Queries",
    required: true,
  },

  topics: {
    type: Array,
    required: true,
    default: [],
  },
});

module.exports = {
  queries: mongoose.model("Queries", QueriesSchema),
  topics: mongoose.model("Topics", TopicSchema),
};
