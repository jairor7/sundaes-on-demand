import axios from "axios";
import baseUrl from "./baseUrl";

const requestApi = (options) => {
  const request = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });

  return request(options);
};

export { requestApi };
