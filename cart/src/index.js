import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counterComponent";
import CounterList from "./components/counterListComponent";
import NavBar from "./components/navBarComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

// <> -- This is called fragment also known as empty tag
//Render all components which ever we want to render 

root.render(
  <React.StrictMode>
    <>
      <NavBar />
      <CounterList />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
