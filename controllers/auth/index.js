const { ctrl } = require("../../helpers");

const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const googleAuth = require("./googleAuth");
const refresh = require("./refresh");
const updateUser = require("./updateUser");

const getCurrent = require("./getCurrentUser");

const addSubscription = require("./addSubscription");
const sendSubscriptionEmail = require("./inviteForSubsciption");

module.exports = {
  register: ctrl(register),
  login: ctrl(login),
  logout: ctrl(logout),
  getCurrent: ctrl(getCurrent),
  googleAuth: ctrl(googleAuth),
  refresh: ctrl(refresh),
  updateUser: ctrl(updateUser),
  addSubscription: ctrl(addSubscription),
  sendSubscriptionEmail: ctrl(sendSubscriptionEmail),
};
