import axios from "axios";


export const inteligentes = axios.create({
  baseURL: "http://127.0.0.1:8000/cannibals_monks/",
});

const convertData = (data) => {
  return {
    cannibals: data.cannibals,
    missionary: data.missionary,
    side: data.side,
    time: parseInt(data.time * 1000),
  };
};
export const getAnchura = async (data) => {
  const inf = convertData(data);
  const resp = await inteligentes
    .post("bfs", inf)
    .then(function (response) {
      console.log(response)
      return response.data;
    })
    .catch(function (error) {
      console.log(error.message + " error");
      return error;
    });

  return resp;
};
export const getUniform_cost = async (data) => {
  const inf = convertData(data);
  const resp = await inteligentes
    .post("uniform_cost", inf)
    .then(function (response) {
      const { data } = response;

      return data;
    })
    .catch(function (error) {
      return error;
    });

  return resp;
};

export const getBest_first = async (data) => {
  const inf = convertData(data);
  const resp = await inteligentes
    .post("best_first", inf)
    .then(function (response) {
      const { data } = response;

      return data;
    })
    .catch(function (error) {
      return error;
    });

  return resp;
};

export const getProfundidad = async (data) => {
  const inf = convertData(data);
  const resp = await inteligentes
    .post("dfs", inf)
    .then(function (response) {
      const { data } = response;

      return data;
    })
    .catch(function (error) {
      return error;
    });

  return resp;
};
