export const AUTOCAELUM_API = "https://jhonatanjacinto.dev/autocaelum/v1";
export const API_USER = "roberta";
export const getAuthToken = () => localStorage.getItem("TOKEN");
export const setAuthToken = () => localStorage.setItem("TOKEN");
export function formataMoeda(valor) {
  return parseFloat(valor).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
