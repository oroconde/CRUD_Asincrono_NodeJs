const { GetAll, Getone, Create, Delete } = require("../models/model");


const getall = async (req, res) => {
    try {
      const result = await GetAll;
      await res.json([result]);
    } catch (error) {
      res.status(500)
    }
}
module.exports =  { getall }
  // async getone (req, res) {
  //   try {
  //     const data = req.body;
  //     const result = await Getone(data);
  //     res.status(200).json({ result });
  //   } catch (error) {
  //     res.status(400).json({ msg: "usuario no registrado" });
  //     throw error;
  //   }
  // },
  // create: async (req, res) => {
  //   try {
  //     const data = req.body;
  //     const result = await Create(data);
  //     if (result) {
  //       res.status(200).json({ msg: "usuario creado" });
  //     } else {
  //       res.status(400).json({ msg: "El usuario se encuentra registrado" });
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  // deleted: async (req, res) => {
  //   try {
  //     const data = req.params.id;
  //     const result = await Delete(data);
  //     if (result) {
  //       res.status(200).json({ msg: "usuario eliminado" });
  //     } else {
  //       res.status(400).json({ msg: "No se usuario registrado con este id" });
  //     }
  //   } catch (error) {
  //     throw e;
  //   }
  // },
