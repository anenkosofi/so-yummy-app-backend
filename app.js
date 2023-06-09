const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/api/users");
const ingredientsRouter = require("./routes/api/ingredients");
const commonRecipesRouter = require("./routes/api/commonRecipes");
const popularRecipesRouter = require("./routes/api/popularRecipes");
const favoriteRecipesRouter = require("./routes/api/favoriteRecipes");
const searchRouter = require("./routes/api/search");
const shoppingListRouter = require("./routes/api/shoppingList");
const ownRecipesRouter = require("./routes/api/ownRecipes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/users", authRouter);
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/recipes", commonRecipesRouter);
app.use("/api/popular-recipe", popularRecipesRouter);
app.use("/api/favorite", favoriteRecipesRouter);
app.use("/api/search", searchRouter);
app.use("/api/shopping-list", shoppingListRouter);
app.use("/api/ownRecipes", ownRecipesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
