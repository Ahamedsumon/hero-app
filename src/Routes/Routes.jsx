import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppInstallation from "../pages/AppInstallation/AppInstallation";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Fallback from "../components/Fallback/Fallback";
import AppDetails from "../pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    ErrorBoundary: Fallback,
    HydrateFallback: Fallback,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("apps-data.json"),
        Component: Home,
      },
      {
        path: "apps",
        // loader: () => fetch("apps-data.json"),
        Component: Apps,
      },
      {
        path: "installation",
        Component: AppInstallation,
      },
      {
        path: "apps-data/:appId",
        Component: AppDetails,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
