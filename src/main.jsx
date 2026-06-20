import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes";

// import Root from "./Root/Root.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from "./pages/Home/Home.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Root,
//     children: [{ index: true, path: "/", Component: Home }],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
