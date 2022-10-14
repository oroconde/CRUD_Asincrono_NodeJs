const fs = require("fs/promises");
const path = require("path");
const pathDB = path.join(__dirname, "../db/db.json");

const Getall = async () => {
  try {
    const db = await fs.readFile(pathDB, "utf-8");
    return JSON.parse(db);
  } catch (e) {
    console.log(e)
    throw e;
  }
};
// const Getone = async (id) => {
//     try {
//       const result = Getall().find(id);
//       return await result;
//     } catch (e) {
//       throw e;
//     }
//   }

module.exports = { Getall };
// Create: async (id) => {
//   try {
//     const Filter = Getall().filter((item) => item.id == id);
//     const db = this.Getall;
//     if (Filter == db) {
//       await filter.push(id);
//       fs.readFile(pathDB, JSON.stringify(Filter, null, 2), "utf-8");
//       return true;
//     } else {
//       return false;
//     }
//   } catch (e) {
//     throw e;
//   }
// },
// Delete: async (id) => {
//   try {
//     const filtrado = Getall.Filter((item = item.id != id));
//     const db = Getall;
//     if (filtrado.length != db.length) {
//       await fs.writeFile(pathDB, JSON.stringify(filtrado, null, 2), "utf8");
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     throw error;
//   }
// },
// Update: async (id, edit) => {},

// Getone().then(console.log()).catch(console.error);
