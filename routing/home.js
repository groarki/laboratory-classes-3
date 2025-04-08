const path = require("path");
const { MENU_LINKS } = require("../constants/navigation");
const express = require("express");
const router = express.Router();

router.get("/", (_request, response) => {
  response.render("index", {
    headTitle: "Shop - Home",
    path: "/",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/",
  });
});

module.exports = router;
