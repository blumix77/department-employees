import express from "express";
import departmentRouter from "./routes/departmentRoute.js";
import employeeRouter from "./routes/employeeRoute.js";
import "./lib/connect_db.js";
import dotenv from "dotenv";
dotenv.config();

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

import setCors from "./middleware/cors.js";
app.use(setCors);

app.use(express.json());

app.use("/api", departmentRouter);
app.use("/api", employeeRouter);

app.use("/", express.static(path.join(__dirname, "/dist")));
app.get("/*", (req, res) => res.sendFile(__dirname + "/dist/index.html")); 


app.use((req, res) => {
    res.status(404).json({msg: "Page not found"});
});

app.use((err, req, res, next) => {
    console.log({err});
    const statusCode = err.statusCode || 501;
    res.status(statusCode).send(err.message);
})

app.listen(port, () => console.log("Server is running on port: " + port));
