import { requestApi } from "./requestApi";

const getOptionsService = (optionType) => {
  return requestApi({
    url: `/${optionType}`,
    method: "GET",
  });
};

export { getOptionsService };
