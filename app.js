const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/product", productRoutes);

module.exports = app;
