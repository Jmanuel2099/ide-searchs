import axios from "axios";

export const inteligentes = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json;",
    "Access-Control-Allow-Origin": "*",
  },
});

export const getBFS = async () => {
  try {
    const resp = await inteligentes
      .get("cannibals_monks/bfs", {})
      .then(function (response) {
        const { data } = response;

        return data;
      })
      .catch(function (error) {
        return error;
      });

    return resp;
  } catch (error) {}
};
