import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import LayoutLeftSidebar from "../layouts/LeftSidebar";
import { routes } from "./root";

const routeList = [...routes];

export default function Routing() {
  return (
    <Router>
      <ErrorBoundary fallback={"Oopss... something went wrong"}>
        <Suspense fallback={"Loading..."}>
          <Routes>
            {routeList.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<LayoutLeftSidebar>{route.element}</LayoutLeftSidebar>}
                exact={true}
              />
            ))}
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}
