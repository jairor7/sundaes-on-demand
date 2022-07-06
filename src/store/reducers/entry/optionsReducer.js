import { entryType } from "../../types";

export const optionsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case entryType.SET_SCOOPS_OPTIONS:
      return {
        ...state,
        scoopsOptions: payload,
        messageError: undefined,
      };
    case entryType.SET_TOPPINGS_OPTIONS:
      return {
        ...state,
        toppingsOptions: payload,
        messageError: undefined,
      };
    case entryType.SET_MESSAGE_OPTIONS:
      return {
        ...state,
        messageError: payload,
      };
    default:
      return state;
  }
};
