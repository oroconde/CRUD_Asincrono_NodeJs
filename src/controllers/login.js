const { login } = require("../models/login");

module.exports = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const result = await login(username, password);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).json({ msg: "Acceso denegado" });
      }
    } catch (error) {
      throw error;
    }
  },
};
