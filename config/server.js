const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

const artikelRouter = require("../app/routes/artikelRouter");
const authRouter = require("../app/routes/authRouter");
const authMiddleware = require("../app/middlewares/authMiddleware");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
    //   secure: true,
    },
    proxy: true,
  })
);

app.use("/auth", authRouter);
app.get("/", (req, res) => res.send("Halo, Remas!"));

// Protect /artikel route
app.use("/artikel", authMiddleware, artikelRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
