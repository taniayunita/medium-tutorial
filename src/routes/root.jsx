import React from "react";

const Carousel = React.lazy(() => import("../pages/Carousel"));
const Home = React.lazy(() => import("../pages/Home"));
const Layout = React.lazy(() => import("../layouts/LeftSidebar"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

export const routes = [
  {
    name: "Not Found",
    element: <NotFound />,
    path: "*",
  },
  {
    name: "Layout",
    element: <Layout />,
    path: "/layout",
  },
  {
    name: "Home",
    element: <Home />,
    path: "/",
  },
  {
    name: "Carousel",
    element: <Carousel />,
    path: "/carousel",
  },
];
