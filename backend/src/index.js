import express from "express"

const PORT = "26000";
const WORD_LIST = ["great", "knock", "guilt", "south", "build", "rifle", "utter", "judge", "sting", "order"]; // I would retrieve words from a public API instead of hardcoding this list.

const app = express();
let target;

app.get("/", (req, res) => {
    target = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
    console.log(target);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
