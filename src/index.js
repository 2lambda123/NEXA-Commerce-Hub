import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import NewProducts from './components/NewProducts'
import ExsitingProductiHome from "./components/ExsitingProductHome";
Amplify.configure(awsExports);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 <App/> 
  </React.StrictMode>
);
reportWebVitals();
