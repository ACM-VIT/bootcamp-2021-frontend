import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6Ld9aoUbAAAAABWWhEzZp_-8FkCCc23QMLOW4EfO">
      <GoogleReCaptcha
        onVerify={(token) => {
          window.sessionStorage.setItem("token", token);
        }}
      />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
