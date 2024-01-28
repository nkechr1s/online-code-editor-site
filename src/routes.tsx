import { createBrowserRouter } from "react-router-dom";
import { Home } from "src/containers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
