import cors from "cors";
import express from "express";

import { validateInput } from "./utils/validator.js";

const PORT = "26000";
const WORD_LIST = ["great", "knock", "guilt", "south", "build", "rifle", "utter", "judge", "sting", "order"]; // I would retrieve words from a public API instead of hardcoding this list.
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

var target;
var targetSet;

app.get("/", (req, res) => {
  target = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)].split("");
  targetSet = new Set(target);
  res.sendStatus(200);
});

app.post("/submit", (req, res) => {
  res.json(validateInput(target, targetSet, req.body));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
