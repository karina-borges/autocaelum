import { AUTOCAELUM_API, getAuthToken, API_USER } from "../utils";

export default class VeiculosService {
  /**
   * Retorna uma lista de veículos da API
   * @param {number} quantidade Quantidade de carros a ser retornada da API
   * @param {boolean} randomico Se os dados devem ser randomizados ou não
   * @returns {Promise<Array>}
   */
  static async getVeiculos(quantidade = 0, randomico = false) {
    let url = AUTOCAELUM_API + "/veiculos/u/" + API_USER;

    if (quantidade > 0) {
      url += "/qtd/" + quantidade;
      if (randomico) {
        url += "/random";
      }
    }

    const resposta = await fetch(url);
    const dadosServidor = await resposta.json();

    if (!resposta.ok) {
      throw new Error(dadosServidor.message);
    }

    const veiculos = dadosServidor; // Array com os veículos
    return veiculos;
  }

  /**
   * Adiciona um carro para o usuário atual
   *
   * @returns {Promise<object>}
   */
  static async addVeiculo(modelo, preco, foto, descricao) {
    // const dadosCarro = { modelo, preco, foto, descricao };
    const url = AUTOCAELUM_API + "/veiculos";
    const token = getAuthToken();
    console.log("token", token);
    const resposta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        modelo: modelo,
        preco: preco,
        foto: foto,
        descricao: descricao,
      }),
    });
    console.log("resposta", resposta);

    if (!resposta.ok) {
      throw new Error(
        "Erro ao salvar os dados do carro. Por favor, tente novamente!"
      );
    }

    const veiculosService = await resposta.json();
    console.log("veiculo criado", veiculosService);
    return veiculosService;
  }

  /**
   * Exclui um carro para o usuário atual
   *
   * @returns {Promise<object>}
   */
  static async deleteVeiculo(veiculoId) {
    const url = AUTOCAELUM_API + "/veiculos/" + veiculoId;
    const token = getAuthToken();
    console.log("token", token);
    const resposta = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("resposta", resposta);

    if (!resposta.ok) {
      throw new Error(
        "Erro ao excluir os dados do carro. Por favor, tente novamente!"
      );
    }

    const veiculosService = await resposta.json();
    console.log("veiculo excluído", veiculosService);
    return veiculosService;
  }
}
