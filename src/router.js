import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { mainLoader } from "./functions/mainFunctions";
import ErrorPage from "./views/ErrorPage";

import Main from "./views/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Main />,
            loader: mainLoader
          }
        ]
      }
    ]
  }
]);

export default router;