import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { appLoader } from "./functions/appFunctions";
import ErrorPage from "./views/ErrorPage";

import Main from "./views/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: appLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Main />
          }
        ]
      }
    ]
  }
]);

export default router;