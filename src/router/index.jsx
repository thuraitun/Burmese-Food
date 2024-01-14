import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import { Detail, Home, NoFound } from "../pages";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/foods/:id",
          element: <Detail />,
        },
        {
          path: "*",
          element: <NoFound />,
        }
      ]
    },
  ]);


export default router;