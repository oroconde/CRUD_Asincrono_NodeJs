const fs = require("fs/promises");
const path = require("path");
const pathDB = path.join(__dirname, "../db/db.json");

const Getall = async () => {
  try {
    const db = await fs.readFile(pathDB, "utf-8");
    return JSON.parse(db);
  } catch (e) {
    throw e;
  }
};
const Getone = async (id) => {
  try {
    const db = await Getall();
    const found = db.find(id);
    return found;
  } catch (e) {
    throw e
};
}
const Create = async (id) => {
  try {
    const db = await Getall();
    const found = Getall().filter((item) => item.id =! id);
    if (found =! db) {
      found.push(id);
      fs.writeFile(pathDB, JSON.stringify(Filter, null, 2), "utf-8");
      return true;
    }
  } catch (e) {
    throw e;
  }
};
const Delete = async (id) => {
  try {
    const found = Getall().filter((item) => item.id != id);
    const db = Getall;
    if (found.length != db.length) {
      await fs.writeFile(pathDB, JSON.stringify(found, null, 2), "utf8");
      return true;
    }
  } catch (e) {
    throw e;
  }
};
const Update = async (id, edit) => {
  try {
    const found = Getall().filter((item) => item.id != id);
    const db = Getall;
    if (filtrado.length != db.length) {
      found.push(edit);
      fs.writeFile(pathDB, JSON.stringify(found, null, 2), "utf8");
      return true;
    }
  } catch (e) {
    throw e;
  }
};

module.exports = { Getall, Getone, Create, Delete, Update };
