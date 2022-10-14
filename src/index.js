const app = require("./app");
const config = require("./config")

app.listen(config.port, () => {console.log(`servidor corriendo en el puerto: ${9000}`)});
