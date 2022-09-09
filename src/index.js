import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import "moment/locale/sv";
import locale from "antd/lib/locale/sv_SE";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GuessForm, GuessList, Thanks } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={locale}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<GuessForm />} />
            <Route path="guesses" element={<GuessList />} />
            <Route path="thanks" element={<Thanks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
