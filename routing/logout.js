const express = require("express");
const { LOGOUT_LINKS } = require("../constants/navigation");
const router = express.Router();

router.get("/", (_request, response) => {
  response.render("logout", {
    headTitle: "Shop - Logout",
    path: "/logout",
    menuLinks: LOGOUT_LINKS,
    activeLinkPath: "/logout",
  });
});

module.exports = router;
