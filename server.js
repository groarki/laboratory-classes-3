const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config");
const logger = require("./utils/logger");
const productsRoutes = require("./routing/products");
const logoutRoutes = require("./routing/logout");
const killRoutes = require("./routing/kill");
const homeRoutes = require("./routing/home");
const { STATUS_CODE } = require("./constants/statusCode");

function getFileFromAbsolutePath(relativePath) {
  return path.join(__dirname, relativePath);
}

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", homeRoutes);
app.use("/products", productsRoutes);
app.use("/logout", logoutRoutes);
app.use("/kill", killRoutes);

app.use((req, res) => {
  res.status(STATUS_CODE.NOT_FOUND).render("404", {
    headTitle: "404 - Page Not Found",
    path: "/404",
    menuLinks: require("./constants/navigation").MENU_LINKS,
    activeLinkPath: "",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
