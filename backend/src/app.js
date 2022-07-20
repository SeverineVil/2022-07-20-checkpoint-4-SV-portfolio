const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
// const categoryRoutes = require("./routes/category.routes");

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

// app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
app.use(userRoutes);
// app.use(categoryRoutes);

// Redirect all requests to the REACT app
// app.get("*", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "..", "..", "frontend", "dist", "index.html")
//   );
// });

// ready to export
module.exports = app;
