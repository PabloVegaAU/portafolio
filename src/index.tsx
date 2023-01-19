import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./routes/root";
import { Tools } from "./routes/tools";
import { AppHeader, AppContent, AppFooter } from "./layout";
import { Paths } from "./store/paths";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = [
  {
    path: Paths.root,
    element: <Root />,
  },
  {
    path: Paths.tools,
    element: <Tools />,
  },
];

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AppHeader />
        <AppContent>
          <Routes>
            {router.map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))}
          </Routes>
        </AppContent>
        <AppFooter />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();