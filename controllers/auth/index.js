const { ctrl } = require("../../helpers"); 

const register = require("./register");
const login = require("./login");
const logout = require("./logout");

const getCurrent = require("./getCurrentUser");

module.exports = {
    register: ctrl(register),
    login: ctrl(login), 
    logout: ctrl(logout),
    getCurrent: ctrl(getCurrent),
}; 