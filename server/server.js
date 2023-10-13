import express from "express"
import * as path from "path";
import bodyParser from "body-parser";
import {authenticationRoutes} from "./controller/authenthicationRoutes.js";
import {snapBoardRoutes} from "./controller/snapBoardRoutes.js";

const app = express();
app.use(bodyParser.json());

app.use("/api/authentication", authenticationRoutes);
app.use("/api/snapboard", snapBoardRoutes);

app.use(express.static("../client/dist"));

app.use((req, res, next) => {
    if (req.method === "GET") {
        res.sendFile(path.resolve("../client/dist/index.html"));
    } else {
        next();
    }
});

app.listen(process.env.PORT || 3000);