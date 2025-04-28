import axios from "axios";

export const sendRequestAxios = async (url) => {
  const response = await axios(url);
  const result = await response.data;
  return result;
};
