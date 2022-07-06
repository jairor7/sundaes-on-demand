import { getOptionsService } from "../../../api/entryService";
import { entryType } from "../../types";

const setScoopsOptions = (payload) => ({
  type: entryType.SET_SCOOPS_OPTIONS,
  payload,
});

const setToppingsOptions = (payload) => ({
  type: entryType.SET_TOPPINGS_OPTIONS,
  payload,
});

const setErrorLoadingOptions = (payload) => ({
  type: entryType.SET_MESSAGE_OPTIONS,
  payload,
});

export const getOptions = (optionType) => {
  return (dispatch) => {
    return getOptionsService(optionType)
      .then((response) => {
        if (optionType === "scoops") {
          dispatch(setScoopsOptions(response.data));
        } else {
          dispatch(setToppingsOptions(response.data));
        }
      })
      .catch((error) => {
        dispatch(setErrorLoadingOptions(error.message));
      });
  };
};
