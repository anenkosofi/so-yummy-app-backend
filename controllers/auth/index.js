const { ctrl } = require("../../helpers");

const register = require("./register");
const login = require("./login");
const logout = require("./logout");

const getCurrent = require("./getCurrentUser");

const addSubscription = require("./addSubscription");
const sendSubscriptionEmail = require("./inviteForSubsciption");

module.exports = {
  register: ctrl(register),
  login: ctrl(login),
  logout: ctrl(logout),
  getCurrent: ctrl(getCurrent),
  addSubscription: ctrl(addSubscription),
  sendSubscriptionEmail: ctrl(sendSubscriptionEmail),
};
