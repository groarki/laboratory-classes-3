const { MENU_LINKS } = require("../constants/navigation");
const { productsSlice } = require("../store/products");

const express = require("express");

const router = express.Router();

router.get("/", (_request, response) => {
  response.render("products", {
    headTitle: "Shop - Products",
    path: "/products",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products",
    products: productsSlice.products,
  });
});

router.get("/add", (_request, response) => {
  response.render("add-product", {
    headTitle: "Shop - Add Product",
    path: "/products/add",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/add",
  });
});

router.post("/add", (request, response) => {
  const product = {
    name: request.body.name,
    description: request.body.description,
  };

  productsSlice.newestProduct = product;
  productsSlice.products.push(product);

  response.redirect("/products/new");
});

router.get("/new", (_request, response) => {
  response.render("new-product", {
    headTitle: "Shop - Newest Product",
    path: "/products/new",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/new",
    newestProduct: productsSlice.newestProduct,
  });
});

module.exports = router;
