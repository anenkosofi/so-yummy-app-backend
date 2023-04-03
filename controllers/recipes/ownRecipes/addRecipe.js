const { OwnRecipe } = require("../../../models");
const { HttpError } = require("../../../helpers");

const addRecipe = async (req, res) => {

  const { _id: owner } = req.user;

  const user = await OwnRecipe.create(
    { ...req.body, _id: owner, new: true });
  if (!user) {
    throw HttpError(404, "Not Found");
  }

  res.status(201).json({ message: "Recipe added successfully" });
};

module.exports = addRecipe;
