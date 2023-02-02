import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// Router import
import { router } from "./routers";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContent, AppFooter, AppHeader } from "./layout";
// Translation imports
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en, es } from "./translations";
// Global CSS
import "./index.css";

i18next.use(initReactI18next).init({
	lng: "es",
	interpolation: {
		escapeValue: false,
	},
	resources: {
		es: {
			translation: es,
		},
		en: {
			translation: en,
		},
	},
});

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<React.StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<AppHeader />
				<AppContent>
					<Routes>
						{router.map((route) => (
							<Route
								key={route.path}
								path={route.path}
								element={route.element}
							/>
						))}
					</Routes>
				</AppContent>
				<AppFooter />
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
