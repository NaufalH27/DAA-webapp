import app from "./app";

app.listen(process.env.port || 8080, () => console.log("Server Running..."));