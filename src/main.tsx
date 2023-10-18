import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { IntlProvider } from 'react-intl';
import en from "../locale/en.json";
import fr from "../locale/fr.json";
import nl from "../locale/nl.json";
import Cookies from "js-cookie";

const messages = {
  en,
  fr,
  nl
}

const locale = Cookies.get("locale") as "nl" || "fr";
const selectedMessages = messages[locale || "nl"];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <IntlProvider locale={locale} messages={selectedMessages}>
        <App />
      </IntlProvider>
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);
