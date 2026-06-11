import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { taskRouter } from "/routes/taskRouter.js";
import { dir } from "node:console";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");
app.set("views", join(__dirname, ""));

    app.get("/", (taskRouter) => {
        res.send("Quer moleza? Vai pra PUC.");
    })

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
