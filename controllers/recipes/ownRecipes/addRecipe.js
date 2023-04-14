const { OwnRecipe } = require("../../../models");
const { recipeImageUpload } = require("../../../middlewares");

const addRecipe = async (req, res) => {
  const { _id: owner } = req.user;

  let imageURL;

  if (req.file) {
    const { path, filename } = req.file;
    imageURL = await recipeImageUpload(filename, path);
    req.body.imageURL = imageURL;
  }

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
