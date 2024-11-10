import "./index.css";
// @deno-types="@types/react"
import { StrictMode } from "react";
// @deno-types="@types/react-dom/client"
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Hk from "./hackerank/index.tsx"
import Cf from "./codeforces/index.tsx"
import Ou from "./omegaup/index.tsx"
import Hack from "./hackerank/code.tsx"
import Coder from "./codeforces/code.tsx"
import Op from "./omegaup/code.tsx"
import New from "./utils/input.tsx"
const router = createBrowserRouter([
  { path: "/hackerank", element: <Hk/> },
  { path: "/codeforces", element: <Cf/> },
  { path: "/omegaup", element: <Ou/> },
  { path: "/hackerank/:id", element: <Hack/>},
  { path: "/codeforces/:id", element: <Coder/>},
  { path: "/omegaup/:id", element: <Op/>},
  { path: "/new/:pt", element: <New />},
  { path: "/*", element: <App />},
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
