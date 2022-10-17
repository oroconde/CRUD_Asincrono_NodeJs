const { Getall, Getone, Create, Delete, Update } = require("../models/model");

const getall = async (req, res) => {
  try {
    const result = await Getall();
    res.json(result);
  } catch (e) {
    res.status(500);
    res.json({ error: JSON.stringify(e) });
  }
};
const getone = async (req, res) => {
  try {
    const data = req.body;
    const result = await Getone(data);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({ msg: "usuario no registrado" });
    throw e;
  }
};
const create = async (req, res) => {
  try {
    const data = req.body;
    const result = await Create(data);
    if (result) {
      res.status(200).json({ msg: "usuario creado" });
    } else {
      res.status(400).json({ msg: "El usuario se encuentra registrado" });
    }
  } catch (e) {
    throw e;
  }
};
const deleted = async (req, res) => {
  try {
    const data = req.params.id;
    const result = await Delete(data);
    if (result) {
      res.status(200).json({ msg: "usuario eliminado" });
    } else {
      res.status(400).json({ msg: "No se usuario registrado con este id" });
    }
  } catch (e) {
    throw e;
  }
};
const update = async (req, res) => {
  try {
    const data = req.params.id;
    const newdata = req.body;
    const result = await Update(data, newdata);
    if (result) {
      res.status(200).json({ msg: "usuario actualizado" });
    } else {
      res.status(400).json({ msg: "No exite usuario con este ID" });
    }
  } catch (e) {
    throw e;
  }
};
module.exports = { getall, getone, create, deleted, update };
