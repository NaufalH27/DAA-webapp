import app from "./app.js";

app.listen(process.env.port || 8080, () => console.log("Server Running..."));