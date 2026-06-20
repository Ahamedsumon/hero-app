import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppInstallation from "../pages/AppInstallation/AppInstallation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "installation",
        Component: AppInstallation,
      },
    ],
  },
]);
