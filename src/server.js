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


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(process.env.port || 8080, () => console.log("Server Running..."));