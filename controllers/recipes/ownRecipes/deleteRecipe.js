const { OwnRecipe } = require("../../../models/ownRecipe");
const { HttpError } = require("../../../helpers");

const deleteRecipe = async (req, res) => {
    const { _id: owner } = req.user;
    const { id } = req.params;
  
    const result = await OwnRecipe.findByIdAndRemove(
      { _id:id , owner },
      
    );
    if (!result) {
      throw HttpError(404, "Not Found");
    }
    res.json({ message: "Recipe deleted" });
};

module.exports = deleteRecipe;