// app.js
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("../routes/authRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

module.exports = app;
