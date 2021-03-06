import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContatoPage from "./pages/ContatoPage";
import SobrePage from "./pages/SobrePage";
import VeiculosPage from "./pages/VeiculosPage";
import LoginPage from "./pages/LoginPage";
import VeiculosAdminPage from "./pages/VeiculosAdminPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/sobre" component={SobrePage} exact />
        <Route path="/veiculos" component={VeiculosPage} exact />
        <Route path="/contato" component={ContatoPage} exact />
        <Route path="/admin/login" component={LoginPage} exact />
        <Route path="/admin/veiculos" component={VeiculosAdminPage} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
