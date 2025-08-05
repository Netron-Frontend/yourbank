import axios from 'axios';

const API_URL = 'https//localhost:4000';

export const fetchRates = async () => {
  const response = await axios.get(`${API_URL}/currency/rates`);
  return response.data;
}
export const convertCurrency = async (amount: number, from: string, to: string) => {
  const response = await axios.get(`${API_URL}/currency/convert`, {
    params: {
      amount,
      from,
      to
    }
  });
  return response.data;
}