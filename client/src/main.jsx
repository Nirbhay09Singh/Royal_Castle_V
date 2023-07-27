import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(

    <Auth0Provider
     domain="dev-rxalu7cq3t4un0yl.us.auth0.com"
     clientId="ziHqRfeA3hkmAGVUeVXWBZxxmzfz1zCz"
     authorizationParams={{
      redirect_uri: "http://localhost:5173"
     }}
     audience='http://localhost:8000'
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
);
