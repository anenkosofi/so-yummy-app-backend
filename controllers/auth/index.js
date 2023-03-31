const { ctrl } = require("../../helpers"); 

const register = require("./register");

module.exports = {
    register: ctrl(register),
}; 