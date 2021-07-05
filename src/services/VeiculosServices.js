import { AUTOCAELUM_API, getAuthToken } from "../utils";

export default class VeiculosService {
  /**
   * Retorna a lista de veiculos do servidor por usuário
   * @param {string} userName
   * @returns {Promise<object> || Promise<Array>}
   */
  static async getVeiculos(userName) {
    const url = AUTOCAELUM_API + "/veiculos/u/" + userName;
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error("Erro ao retornar a lista de veículos do usuário!");
    }

    const veiculos = await resposta.json();
    return veiculos;
  }

  /**
   * LISTAR QTD ESPECIFICA DE VEÍCULOS DO USUARIO X
   * @param {string} userName
   * @param {string} quantidade
   * @returns {Promise<object> || Promise<Array>}
   */
  static async getVeiculosComQuantidade(userName, quantidade) {
    const url =
      AUTOCAELUM_API + "/veiculos/u/" + userName + "/qtd/" + quantidade;
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error("Erro ao retornar a lista de veículos do usuário!");
    }

    const veiculos = await resposta.json();
    return veiculos;
  }

  /**
   * LISTAR QTD ESPECIFICA E RANDÔMICA DE VEÍCULOS DO USUARIO X
   * @param {string} userName
   * @param {string} quantidade
   * @returns {Promise<object> || Promise<Array>}
   */
  static async getVeiculosComQuantidadeRandomico(userName, quantidade) {
    const url =
      AUTOCAELUM_API +
      "/veiculos/u/" +
      userName +
      "/qtd/" +
      quantidade +
      "/random";
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error("Erro ao retornar a lista de veículos do usuário!");
    }

    const veiculos = await resposta.json();
    return veiculos;
  }
}
