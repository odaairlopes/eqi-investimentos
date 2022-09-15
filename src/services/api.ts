import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getIndicators = async (indicator: string) => {
  try {
    const response = await api.get(`indicadores/?nome=${indicator}`);
    if (!response.data[0]) throw new Error();
    return response.data[0];
  } catch (error) {
    console.log(error);
  }
};

export const getSimulation = async (
  indexingType: string,
  incomeType: string
) => {
  try {
    const response = await api.get(
      `simulacoes/?tipoIndexacao=${indexingType}&tipoRendimento=${incomeType}`
    );
    if (!response.data[0]) throw new Error();
    return response.data[0];
  } catch (error) {
    console.log(error);
  }
};
