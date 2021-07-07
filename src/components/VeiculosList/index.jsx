import React, { useEffect, useState } from "react";
import VeiculoItem from "../VeiculoItem";
import "../../assets/css/veiculos.css";
import VeiculosService from "../../services/VeiculosServices";

export default function VeiculosList({ quantidade, mostrarTitulo, randomico }) {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    VeiculosService.getVeiculos(quantidade, randomico).then((listaVeiculos) =>
      setVeiculos(listaVeiculos)
    );
  }, []);

  return (
    <section className="container lista-veiculos">
      {mostrarTitulo && <h2>Veículos</h2>}
      <ul className="flex">
        {veiculos.map((veiculo) => {
          return <VeiculoItem key={veiculo.id} {...veiculo} />;
        })}
      </ul>
    </section>
  );
}

VeiculosList.defaultProps = {
  quantidade: 4,
  mostrarTitulo: true,
  randomico: false,
};
