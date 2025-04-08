const express = require("express");
const { LOGOUT_LINKS } = require("../constants/navigation");
const logger = require("../utils/logger");

const router = express.Router();

router.get("/", (request, response) => {
  response.render("kill", {
    headTitle: "Shop - Kill",
    path: "/kill",
    menuLinks: LOGOUT_LINKS,
    activeLinkPath: "/kill",
  });

  setTimeout(() => {
    process.exit(0);
  }, 3000);
});

module.exports = router;
