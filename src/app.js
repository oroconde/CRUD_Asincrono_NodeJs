const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))
app.use("/", require("./routes/route"))

module.exports = app;