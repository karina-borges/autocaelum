import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../../assets/css/bootstrap.min.css";
import logo from "../../assets/images/logo-rodape.png";
import VeiculosService from "../../services/VeiculosServices";
import { formataMoeda } from "../../utils";

export default function VeiculosAdminPage(quantidade, randomico) {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    VeiculosService.getVeiculos(quantidade, randomico).then((listaVeiculos) =>
      setVeiculos(listaVeiculos)
    );
  }, [veiculos]);

  const handleAddVeiculo = async (event) => {
    event.preventDefault();
    const { modelo, preco, foto, descricao } = event.target;
    console.log(modelo.value, preco.value, foto.value, descricao.value);
    try {
      await VeiculosService.addVeiculo(
        modelo.value,
        preco.value,
        foto.value,
        descricao.value
      );
      event.target.reset();
      console.log("foi aqui");
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (veiculoId) => {
    try {
      await VeiculosService.deleteVeiculo(veiculoId);
      console.log("deletou");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Helmet>
        <title>AutoCaelum | Gerenciar Veículos</title>
      </Helmet>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand mr-auto" href="#">
          <img src={logo} className="d-inline-block align-top mr-3" alt="" />
          Administração
        </a>
        <button className="btn btn-danger">Sair</button>
      </nav>
      <div className="jumbotron container p-5 mb-5">
        <h1 className="h2 float-left">
          <span className="text-secondary">Veículos /</span> Gerenciar
        </h1>
        <div className="clearfix"></div>
        <hr />
        <p className="lead mb-0">
          Utilize os recursos abaixo para realizar o gerenciamento dos veículos
          do site.
        </p>
      </div>
      <div className="container">
        <form
          method="POST"
          className="card"
          action=""
          enctype="multipart/form-data"
          onSubmit={handleAddVeiculo}
        >
          <div className="card-body">
            <div className="row">
              <div className="form-group col-md-12">
                <label>* Modelo:</label>
                <input type="text" className="form-control" name="modelo" />
              </div>
              <div className="form-group col-md-12">
                <label>* Preco:</label>
                <input type="number" className="form-control" name="preco" />
              </div>
              <div className="form-group col-md-12">
                <label>Foto:</label>
                <input
                  type="text"
                  className="form-control"
                  name="foto"
                  placeholder="URL da foto"
                />
              </div>
              <div className="form-group col-md-12">
                <label>* Descrição:</label>
                <textarea
                  name="descricao"
                  className="form-control"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-group col-md-12">
                <button className="btn btn-lg btn-success">
                  Cadastrar Veículo
                </button>
              </div>
            </div>
          </div>
        </form>
        <hr />
      </div>
      <div className="container">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Foto</th>
              <th scope="col">Modelo</th>
              <th scope="col">Preço</th>
              <th scope="col">Descrição</th>
              <th scope="col" width="10%"></th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map((veiculo) => {
              return (
                <tr key={veiculo.id}>
                  <th scope="row">1</th>
                  <td>
                    <img
                      src={veiculo.foto}
                      width="100"
                      className="img-responsive"
                    />
                  </td>
                  <td>{veiculo.modelo}</td>
                  <td>{formataMoeda(veiculo.preco)}</td>
                  <td>{veiculo.descricao}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      title="Excluir"
                      onClick={() => handleDelete(veiculo.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
