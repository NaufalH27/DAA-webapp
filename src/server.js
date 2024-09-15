import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use("/static", express.static(path.resolve(__dirname,"public", "static")));
app.use("/app", express.static(path.resolve(__dirname,"app")));


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(process.env.port || 8080, () => console.log("Server Running..."));