import React from "react";

import { OrderEntry } from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./context/OrderDetails";

export const SundaesOnDemand = () => {
  return (
    <OrderDetailsProvider>
      <OrderEntry />
    </OrderDetailsProvider>
  );
};
