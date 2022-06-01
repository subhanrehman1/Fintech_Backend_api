const Joi = require("joi");
function errorHandler(brands) {
  const brandsSchema = Joi.object({
    brandCode: Joi.string().alphanum().min(5),
    brandName: Joi.string().alphanum(),
    email: Joi.string().alphanum(),
    companyLogo: Joi.string().alphanum(),
    websiteUrl: Joi.string().alphanum(),
    legalName: Joi.string().alphanum(),
    legalConstituitionName: Joi.string().alphanum(),
    businessPan: Joi.string(),
    dateOfIncorporation: Joi.string(),
    cin: Joi.string().alphanum(),
  });
  return brandsSchema.validate(brands);
}

module.exports = errorHandler;
