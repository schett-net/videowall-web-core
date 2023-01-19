import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

// DOM bindings for React Router
import { BrowserRouter } from "react-router-dom";

//> Redux
// Provider
import { Provider } from "react-redux";
//> Redux store
import store from "./store";

import { AuthProvider } from "./context/AuthProvider";

// Language framework
import {
  FpjsProvider,
  CacheLocation,
  LoadOptions,
} from "@fingerprintjs/fingerprintjs-pro-react";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

// Start session
//Drop.bridge.session.begin();

const config = { publicKey: "pk_105e271cd95fcb6f9c1e" };

root.render(
  <React.StrictMode>
    <FpjsProvider
      // @ts-ignore
      cacheLocation={CacheLocation.LocalStorage}
      cachePrefix="PF_fpjs"
      loadOptions={{
        apiKey: "F8Rwnsk8mwKYv6rEmIbY",
        region: "eu",
        endpoint: "https://metrics.personaforge.com",
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FpjsProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
