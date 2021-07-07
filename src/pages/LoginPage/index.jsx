import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import "../../assets/css/bootstrap.min.css";
import logo from "../../assets/images/logo-rodape.png";
import LoginService from "../../services/LoginServices";

export default function LoginPage() {
  const history = useHistory();

  const loginHandler = async (event) => {
    event.preventDefault();
    const { usuario, senha } = event.target;

    try {
      await LoginService.login(usuario.value, senha.value);
      console.log("foi");
      history.push("/admin/veiculos");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Helmet>
        <title>AutoCaelum | Login</title>
      </Helmet>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand mr-auto" href="#">
          <img src={logo} className="d-inline-block align-top mr-3" alt="" />
          Administração
        </a>
      </nav>
      <div className="container my-5">
        <form className="card mx-auto w-50" onSubmit={loginHandler}>
          <div className="card-header p-5 text-center">
            <h3 className="h2 mb-0">Área Restrita</h3>
            <span>
              Utilize o formulário abaixo para acessar a Área Administrativa.
            </span>
          </div>

          <div className="card-body p-5">
            <div className="form-group">
              <label>* Usuario:</label>
              <input
                type="text"
                name="usuario"
                placeholder="Insira seu usuário"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>* Senha:</label>
              <input
                type="password"
                name="senha"
                placeholder="Insira sua senha"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-lg">Entrar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
