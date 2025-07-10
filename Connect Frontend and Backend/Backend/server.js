// const express = require("express")
import express from "express";
const app = express();

app.use(express.static("dist"));

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// get list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is a another joke",
    },
    {
      id: 3,
      title: "A third joke",
      content: "This is a third joke",
    },
    {
      id: 4,
      title: "A fourth joke",
      content: "This is a fourth joke",
    },
    {
      id: 5,
      title: "A fifth joke",
      content: "This is a fifth joke",
    },
  ];
  res.send(jokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
