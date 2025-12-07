import express from "express";

const app = express();

app.listen(5000, () => {
  console.log("Server is started at http://localhost:5000");
});
