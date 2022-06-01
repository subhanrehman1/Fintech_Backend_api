const express = require("express");
const errorHandler = require("../../helpers/errorHandler/errorHandler");
const brands = require("../../models/brands/brands");
const router = express();
const Brands = require("../../models/brands/brands");

//GET METHOD
router.get(`/`, async (req, res) => {
  const brandList = await Brands.find();
  if (!brandList) {
    return res.status(500).json({ success: false });
  }
  res.status(200).send(brandList);
});

//GET METHOD BY ID
router.get(`/:id`, async (req, res) => {
  const brand = await Brands.findById(req.params.id);
  if (!brand) {
    return res.status(500).json({
      success: false,
      message: "The category with the given Id not exists.",
    });
  }
  res.status(200).send(brand);
});

//POST METHOD
router.post(`/`, async (req, res) => {
  let brands = new Brands({
    brandCode: req.body.brandCode,
    brandName: req.body.brandName,
    email: req.body.email,
    companyLogo: req.body.companyLogo,
    websiteUrl: req.body.websiteUrl,
    legalName: req.body.legalName,
    legalConstituitionName: req.body.legalConstituitionName,
    businessPan: req.body.businessPan,
    dateOfIncorporation: `${req.body.dateOfIncorporation}T12:24:49.718Z`,
    cin: req.body.cin,
  });
  const {error} = errorHandler(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  brands = await brands.save();
  if (!brands) {
    return res.status(404).send("brand cannot be created");
  }
  res.status(201).send(brands);
});

//DELETE METHOD
router.delete("/:id", (req, res) => {
  Brands.findByIdAndRemove(req.params.id)
    .then((brand) => {
      if (brand) {
        return res.status(200).send(brand);
      } else {
        return res
          .status(404)
          .json({ success: false, message: "category cannot find" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, message: err });
    });
});

//PUT METHOD
router.put("/:id", async (req, res) => {
  const brand = await Brands.findByIdAndUpdate(req.params.id, {
    brandCode: req.body.brandCode,
    brandName: req.body.brandName,
    email: req.body.email,
    companyLogo: req.body.companyLogo,
    websiteUrl: req.body.websiteUrl,
    legalName: req.body.legalName,
    legalConstituitionName: req.body.legalConstituitionName,
    businessPan: req.body.businessPan,
    dateOfIncorporation: `${req.body.dateOfIncorporation}T12:24:49.718Z`,
    cin: req.body.cin,
  });
  if (!brand) {
    return res.status(404).send("brand cannot be updated");
  }
  const {error} = errorHandler(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  res.send(brand);
});
module.exports = router;
