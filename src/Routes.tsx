//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
  useNavigate,
  useLocation,
} from "react-router-dom";
//> Redux
import { connect } from "react-redux";

//> Components
import Main from "./components/pages/Main/index";
//#endregion

//#region > Components
const PageRoutes = () => {
  // Scroll to top of the page
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Routes>
      {/* public routes */}
      <Route path="/login" element={<Main />} />
      {/* private routes */}
      {/* <Route element={<Origin />}>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route> */}
      {/* catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
//#endregion

export default PageRoutes;

/**
 * Copyright © 2021-2022 Christian Aichner <contact@aichner-christian.com>
 *
 * This file is part of react-kanbon-app.
 *
 * react-kanbon-app may not be used, copied and/or distributed without the express permission of Christian Aichner
 */
