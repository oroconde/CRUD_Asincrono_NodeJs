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
    const found = db.find(item => item.id === id);
    return found;
  } catch (e) {
    throw e
};
}
const Create = async (user) => {
  try {
    const db = await Getall();
    const found = db.filter(item => item.id == user.id);
    if (found.length == 0 ) {
      db.push(user);
      fs.writeFile(pathDB, JSON.stringify(db, null, 2), "utf-8");
      return true;
    }
  } catch (e) {
    throw e;
  }
};
const Delete = async (id) => {
  try {
    const db = await Getall();
    const newarray = db.filter(item => item.id != id);
    if (newarray.length != db.length) {
      fs.writeFile(pathDB, JSON.stringify(newarray, null, 2), "utf8");
      return true;
    }
  } catch (e) {
    throw e;
  }
};
const Update = async (id, edit) => {
  try {
    const db = await Getall();
    const newarray =db.filter(item => item.id != id);
    if (newarray.length != db.length) {
      newarray.push(edit);
      fs.writeFile(pathDB, JSON.stringify(newarray, null, 2), "utf8");
      return true;
    }
  } catch (e) {
    throw e;
  }
};

module.exports = { Getall, Getone, Create, Delete, Update };
