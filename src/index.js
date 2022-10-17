const app = require("./app");
const { port } = require("./config");
// const config = require("./config");

app.listen(port, () => {
  console.log(`servidor corriendo en el puerto: ${port}`);
});
