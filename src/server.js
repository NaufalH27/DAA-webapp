import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import coinChangeController from './controllers/coinChangeController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use("/static", express.static(path.resolve(__dirname,"public", "static")));
app.use("/views", express.static(path.resolve(__dirname, "views")));

app.post("/api/results/coinchange", async (req, res) => {
    return coinChangeController(req, res)
});

app.post("/api/results/20solver", async (req, res) => {
    return 
});


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(process.env.port || 8080, () => console.log("Server Running..."));
