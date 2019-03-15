const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongojs = require("mongojs");
const jwt = require("jsonwebtoken");

const db = mongojs("events-portal", ["events"]);

const eventRoutes = require("./event-routes");
const config = require("./config");

const app = express();

app.set("synesecret", config.secretKey);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api/events", eventRoutes);

app.listen(9091, () => {
    console.log("Synechron REST Api is listening on PORT : 9091");
});