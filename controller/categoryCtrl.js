const PCategory = require('../models/categoryModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodbId');
const createPCategory = asyncHandler(async (req, res) => {
  try {
    const newPCategory = await PCategory.create(req.body);
    res.json(newPCategory);
  } catch (err) {
    throw new Error(err);
  }
});
const deletePCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletePCategory = await PCategory.findByIdAndDelete(id,);
    res.json("Delete successfully!!!");
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  createPCategory,
  updatePCategory,
  deletePCategory,
  getPCategory,
  getAllPCategory,
};