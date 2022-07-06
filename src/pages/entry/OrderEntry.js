import React from "react";
import { SummaryForm } from "../summary/SummaryForm";
import { Options } from "./Options";

export const OrderEntry = () => {
  return (
    <>
      <Options optionType={"scoops"} />
      <Options optionType={"toppings"} />
      <SummaryForm />
    </>
  );
};
