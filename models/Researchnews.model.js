const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResearchSchema = new Schema(
  {
    id:{type:String,required:true},
    researchTitle: { type: String, required: true },
    researchDesc: { type: String, required: true },
    image: { type: String },
    sourceofinformation: { type: Object, default: {} },
    type: { type: String },
  },
  {
    timestamps: true,
  }
);

const Research = mongoose.model("Research", ResearchSchema);

module.exports = Research;
