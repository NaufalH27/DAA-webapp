const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname,"public", "static")));

app.get("/api/results/greedy", async (req, res) => {
    return
});

app.get("/api/results/20solver", async (req, res) => {
    return
});
