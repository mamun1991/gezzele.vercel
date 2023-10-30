const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./server/middlewares/defaultErrorMiddlewares");
const dbConnection = require("./server/db/dbConnection");
const path = require("path");
const adminInit = require("./server/utils/adminInit");

const app = express();

//external middlewares
app.use(cors());
dotenv.config();

//Internal middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//server init
dbConnection();
adminInit();

//routes
const blogHandler = require("./server/routes/blog.routes");
const userHandler = require("./server/routes/user.routes");
const eligibleHandler = require("./server/routes/eligible.routes");

app.use("/api/v1/blog", blogHandler);
app.use("/api/v1/user", userHandler);
app.use("/api/v1/eligible", eligibleHandler);

// --------------------------deployment------------------------------

if (process.env.NODE_ENV === "production") {
    app.get("/", (req, res) => {
        res.send("APP is running..");
    });
}
// --------------------------deployment------------------------------

//bad request
app.get("*", (req, res) => {
    res.status(404).json({
        message: "Page not found",
    });
});

//error handling
app.use(notFound);
app.use(errorHandler);

// listing to the server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
