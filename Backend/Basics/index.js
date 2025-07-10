import "dotenv/config";
// const express = require("express");
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Or sab thik");
});

app.get("/login", (req, res) => {
  res.send("Login karna chahta hu");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>process.env.PORT </h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
