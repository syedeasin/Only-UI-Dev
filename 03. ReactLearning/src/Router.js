const productpage = React.lazy(() => import("./productpage"));
const routes = [
  {
    component: productpage,
    path: "products",
  },
];
