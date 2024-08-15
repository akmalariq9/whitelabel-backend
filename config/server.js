const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const artikelRouter = require("../app/routes/artikelRouter");
const authRouter = require("../app/routes/authRouter");
const authMiddleware = require("../app/middlewares/authMiddleware");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      sameSite: "lax",
      secure: false,
    },
    proxy: false,
  })
);

app.use("/auth", authRouter);
app.get("/", (req, res) => res.send("Halo, Remas!"));

app.use("/artikel", authMiddleware, artikelRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
