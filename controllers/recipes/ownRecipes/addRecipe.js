const { OwnRecipe } = require("../../../models");

const addRecipe = async (req, res) => {
  const { _id: owner } = req.user;

  const newRecipe = await OwnRecipe.create({
    ...req.body,
    owner,
    new: true,
  });

  res.status(201).json({
    recipe: newRecipe,
  });
};

module.exports = addRecipe;
