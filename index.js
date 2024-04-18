const app = require("./app");
const mongoose = require("mongoose");
const Product = require("./models/productModel");

const port = 3000;
// const db_host = "127.0.0.1";
// const db_uri = `mongodb://${db_host}/prueba`;

mongoose
  .connect(
    "mongodb+srv://blockacademy:blockacademy@clustersample.6yiexp4.mongodb.net/prueba"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((error) => console.log(error));
