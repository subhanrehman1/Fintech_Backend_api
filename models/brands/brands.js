const mongoose = require("mongoose");

const brandsSchema = mongoose.Schema({
  brandCode: {
    type: String,
    require: true,
  },
  brandName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  companyLogo: {
    type: String,
  },
  websiteUrl: {
    type: String,
  },
  legalName: {
    type: String,
  },
  legalConstituitionName: {
    type: String,
  },
  businessPan: {
    type: String,
  },
  dateOfIncorporation: {
    type: Date,
    default: Date.now(),
  },
  cin: {
    type: String,
  },
});

module.exports = mongoose.model("Brands", brandsSchema);
