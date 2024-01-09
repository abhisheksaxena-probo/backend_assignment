const express = require("express");

require("express-async-errors");
const db = require("./db");
const cors = require("cors");
const contractRouter = require("./rotues/contractRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/contracts", contractRouter);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message });
});

db.query("Select 1")
  .then((data) => {
    console.log("db connection succesful");
    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
  })
  .catch((error) => console.log(error));

module.exports = { app };
