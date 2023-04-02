const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { mongooseErrorHandler } = require("../helpers");

// const bcryptjs = require("bcryptjs");

const nameRegExp = /^(?:[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*|\d+)$/u;
const emailRegExp = /^\w+([.-]?\w+){2}@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegExp = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      minLength: 1,
      maxLength: 12,
      trim: true,
      required: [true, "Name is required"],
      match: [nameRegExp, "Please fill a valid name"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [emailRegExp, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },

    accessToken: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
    },
    avatarURL: {
      type: String,
      required: false,
      default: "",
    },

    favorites: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "commonRecipe",
        },
      ],
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", mongooseErrorHandler);

const joiRegisterSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required().messages({
    "string.pattern.base": `Please fill a valid email address`,
  }),
  password: Joi.string()
    .pattern(passwordRegExp)
    .min(6)
    .max(16)
    .required()
    .messages({
      "string.pattern.base": `Please fill a valid password`,
    }),
  name: Joi.string().pattern(nameRegExp).min(1).max(12).required().messages({
    "string.pattern.base": `Please fill a valid name`,
  }),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required().messages({
    "string.pattern.base": `Please fill a valid email address`,
  }),
  password: Joi.string().required(),
});

const refreshSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const updateUserSchema = Joi.object().keys({
  name: Joi.string(),
  avatar: Joi.binary(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
  refreshSchema,
  updateUserSchema,
};
