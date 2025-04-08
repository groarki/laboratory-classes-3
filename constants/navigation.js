const HOME_LINK = {
  label: "Home",
  path: "/",
};

const LOGOUT_LINKS = [
  HOME_LINK,
  {
    label: "Logout from application",
    path: "/kill",
  },
];

const MENU_LINKS = [
  HOME_LINK,
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "Add product",
    path: "/products/add",
  },
  {
    label: "Newest product",
    path: "/products/new",
  },
  {
    label: "Logout",
    path: "/logout",
  },
];

module.exports = {
  HOME_LINK,
  LOGOUT_LINKS,
  MENU_LINKS,
};
