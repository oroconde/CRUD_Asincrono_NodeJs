const { Getall } = require("../models/model");
module.exports = {
  login: async (username, password) => {
    try {
      const users = await Getall();
      const found = users.find(
        (item) => (item.username === username) & (item.password === password)
        );
        if (found) {
            return true
        } else {
            return false
        }
    } catch (error) {
        throw error
    }
  },
};
